// Data url
const dataURL = "/data/posts.json";

// Selctors
const postsContainer = document.querySelector(".main-posts-container");
const trendingPostsContainer = document.querySelector(
  ".trending-posts-container"
);
const showMoreButton = document.querySelector(".load-more-button");

// Fetch function for posts data in homepage

const fetchPosts = async () => {
  try {
    const response = await fetch("/javascript/data/posts.json");
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

  posts.map((post) => {
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

// Button show more functionality

let numberOfPosts = 5;

showMoreButton.addEventListener("click", (e) => {
  const elementList = [
    ...document.querySelectorAll(".main-posts-container .post-container"),
  ];
  console.log(elementList);

  for (let i = numberOfPosts; i < numberOfPosts + 5; i++) {
    setTimeout(() => {
      if (elementList[i]) {
        elementList[i].style.display = "flex";
      }
    }, 500);
  }

  numberOfPosts += 5;

  if (numberOfPosts >= elementList.length) {
    event.target.classList.add("loaded");
  }
});

// Proggres bar functionality

const filled = document.querySelector(".filled");

const updateProgresBarFilled = () => {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(updateProgresBarFilled);
};

// Calling proggres bar function for working
updateProgresBarFilled();

fetchPosts();
