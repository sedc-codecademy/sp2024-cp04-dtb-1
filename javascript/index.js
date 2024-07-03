import { homePageHTML } from "./javascript files/pagesHtml.js";
import { navbarFunction } from "./javascript files/navbar.js";
import { showMoreButton } from "./javascript files/showMoreButton.js";
import { landingPageFunc } from "./javascript files/landingPage.js";
import { renderIndexHTML } from "./javascript files/globalRenderHTML.js";
import { renderFilteredPosts } from "./javascript files/filterPosts.js";
import {
  scrollFunction,
  topFunction,
} from "./javascript files/backToTopButton.js";
import { renderPostList } from "./javascript files/renderPostList.js";
import { renderTrendingPostList } from "./javascript files/renderTrendingPostList.js";

// Data url
const dataURL = "/javascript/data/posts.json";

// Selectors for all elements in html
let indexHTML = document.querySelector(".body-container");
const landingPageMainContainer = document.querySelector(".landingMain");
const landingPageButton = document.querySelector(".landing-page-button");
const outputText = document.querySelector(".output");

// Landing Page js

landingPageFunc(outputText);

landingPageButton.addEventListener("click", () => {
  landingPageMainContainer.style.display = "none";
  renderIndexHTML(indexHTML, homePageHTML);
  homePageGlobalFunction();
});

// HomePage global function

export const homePageGlobalFunction = () => {
  navbarFunction();

  // Fetch data and functions for that
  const searchInput = document.querySelector(".search-input");
  const selectOneFilter = document.querySelector(".select-filters-one");
  const selectTwoFilter = document.querySelector(".select-filters-two");
  const filterButton = document.querySelector(".posts-filter-button");
  const postsContainer = document.querySelector(".main-posts-container");
  const trendingPostsContainer = document.querySelector(
    ".trending-posts-container"
  );

  const fetchPosts = async () => {
    try {
      const response = await fetch(dataURL);
      const data = await response.json();

      console.log(data);
      renderTrendingPostList(data, trendingPostsContainer);
      renderPostList(
        data.sort((a, b) => new Date(b.date) - new Date(a.date)),
        postsContainer
      );

      searchInput.addEventListener("input", () => {
        if (searchInput.value.length > 0) {
          onSearch(data, postsContainer);
        } else {
          document.querySelector(".main-container").style.gap = "30px";
          trendingPostsContainer.style.display = "flex";
          document.querySelector(".trending-heading-container").style.display =
            "block";
          mainPostsHeading.style.width = "235px";
          mainPostsHeading.innerHTML = `<span
                ><img
                  src="./assets/logos/only logo.png"
                  alt=""
                  width="20px" /></span
              ><i>Newest posts</i>`;
          showMore.classList.remove("loaded");
        }
      });

      filterButton.addEventListener("click", () => {
        filterPosts(selectOneFilter.value, selectTwoFilter.value, data);
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const filterPosts = (selectOneValue, selectTwoValue, postsData) => {
    const postsDataCopy = [...postsData];

    if (selectOneValue === "rating") {
      if (selectTwoValue === "asc") {
        postsDataCopy.sort((a, b) => a.rating - b.rating);
      }
      if (selectTwoValue === "desc") {
        postsDataCopy.sort((a, b) => b.rating - a.rating);
      }
    }

    if (selectOneValue === "date") {
      if (selectTwoValue === "asc") {
        postsDataCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      if (selectTwoValue === "desc") {
        postsDataCopy.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    }

    renderFilteredPosts(postsDataCopy, postsContainer);
  };

  const mainPostsHeading = document.querySelector(".main-posts-heading");

  const onSearch = (data, container) => {
    let value = searchInput.value;
    const filteredData = data.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredData);

    mainPostsHeading.style.width = "260px";
    mainPostsHeading.innerHTML = `<span
                ><img
                  src="./assets/logos/only logo.png"
                  alt=""
                  width="20px" /></span
              ><i>Searched posts</i>`;
    document.querySelector(".main-container").style.gap = 0;
    trendingPostsContainer.style.display = "none";
    document.querySelector(".trending-heading-container").style.display =
      "none";
    showMore.classList.add("loaded");
    container.innerHTML = "";
    renderPostList(filteredData, container);
  };

  // Show more button
  const showMore = document.querySelector(".load-more-button");
  showMoreButton(5, showMore);

  // Back to  top

  let backToTopBtn = document.querySelector(".back-to-top-button");

  window.onscroll = () => {
    scrollFunction();
  };

  backToTopBtn.addEventListener("click", () => {
    topFunction();
  });

  // Calling fetch data on every homepage open or refresh
  fetchPosts();
};
