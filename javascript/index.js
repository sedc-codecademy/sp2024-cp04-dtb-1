import {
  homePageHTML,
  registerPageHTML,
} from "./javascript files/pagesHtml.js";
import { navbarFunction } from "./javascript files/navbar.js";
import { registerValidation } from "./javascript files/registerValidation.js";
import { showMoreButton } from "./javascript files/showMoreButton.js";
import { landingPageFunc } from "./javascript files/landingPage.js";
import { renderIndexHTML } from "./javascript files/globalRenderHTML.js";

// Data url
const dataURL = "/javascript/data/posts.json";

// Selectors for all elements in html
let indexHTML = document.querySelector(".body-container");
const landingPageMainContainer = document.querySelector(".landingMain");
const landingPageButton = document.querySelector(".landing-page-button");
const outputText = document.querySelector(".output");

landingPageButton.addEventListener("click", () => {
  landingPageMainContainer.style.display = "none";
  renderIndexHTML(indexHTML, homePageHTML);
  homePageGlobalFunction();
});

const renderRegisterPage = (regiserPage) => {
  renderIndexHTML(indexHTML, regiserPage);

  registerValidation();

  const loginLink = document.querySelector(".login-link");

  const registerContainer = document.querySelector(".container");

  loginLink.addEventListener("click", () => {
    registerContainer.style.display = "none";
    renderIndexHTML(indexHTML, homePageHTML);
    homePageGlobalFunction();
  });
};

// Landing Page js

landingPageFunc(outputText);

// HomePage global function

const homePageGlobalFunction = () => {
  navbarFunction();
  const registerButtonLink = document.querySelector(".create-account-link");

  registerButtonLink.addEventListener("click", () => {
    renderRegisterPage(registerPageHTML);
  });

  // Fetch data and functions for that

  const postsContainer = document.querySelector(".main-posts-container");
  const trendingPostsContainer = document.querySelector(
    ".trending-posts-container"
  );

  const fetchPosts = async () => {
    try {
      const response = await fetch(dataURL);
      const data = await response.json();

      console.log(data);
      renderTrendingPosts(data);
      renderPosts(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Render function for newest posts
  const renderPosts = (posts) => {
    let postHTML = "";

    posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((post) => {
        postHTML += `<div class="post-container">
              <div class="blog-post">
                <div class="blog-post_img">
                  <img
                    src=${post.image}
                    alt=""
                    height="45px"
                  />
                </div>
                <div class="blog-post_info">
                  <h1 class="blog-post_title">${post.title}</h1>
                  <p class="blog-post_text">
                  ${post.description}
                  </p>
                  <div class="blog-post_button_and_date">
                    <div>
                      <button class="blog-post_button">Read More</button>
                    </div>
                    <div class="blog-post_date">
                      <div>
                        <small>${post.author}</small>
                        <small>${post.date}</small>
                      </div>
                      <small class="post-rating">${post.rating}⭐</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

        postsContainer.innerHTML = postHTML;
      });
  };

  // Render trending posts functionality

  const renderTrendingPosts = (posts) => {
    let trendingPostsHTML = "";

    posts
      .filter((post) => post.rating >= 5)
      .slice(0, 2)
      .map((post) => {
        trendingPostsHTML += `<div class="post-container">
              <div class="blog-post">
                <div class="blog-post_img">
                  <img
                    src=${post.image}
                    alt=""
                    height="45px"
                  />
                </div>
                <div class="blog-post_info">
                  <h1 class="blog-post_title">${post.title}</h1>
                  <p class="blog-post_text">
                  ${post.description}
                  </p>
                  <div class="blog-post_button_and_date">
                    <div>
                      <button class="blog-post_button">Read More</button>
                    </div>
                    <div class="blog-post_date">
                      <div>
                        <small>${post.author}</small>
                        <small>${post.date}</small>
                      </div>
                      <small class="post-rating">${post.rating}⭐</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
      });

    trendingPostsContainer.innerHTML += trendingPostsHTML;
  };

  // Show more button
  const showMore = document.querySelector(".load-more-button");
  showMoreButton(5, showMore);

  // Calling fetch data on every homepage open or refresh
  fetchPosts();
};
