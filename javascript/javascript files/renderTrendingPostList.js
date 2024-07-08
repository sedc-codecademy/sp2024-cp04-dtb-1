import { renderPostInPostPage } from "../javascript files/renderPostInPostPage.js";

export const renderTrendingPostList = (posts, container) => {
  const sortedPosts = posts.filter((post) => post.rating >= 5).slice(0, 2);
  for (const post of sortedPosts) {
    const postContainerEl = document.createElement("DIV");

    postContainerEl.classList.add("post-container");

    postContainerEl.innerHTML = `
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
                      <button class="blog-post_button"}>Read More</button>
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
              </div>`;

    postContainerEl
      .querySelector(".blog-post_button")
      .addEventListener("click", () => {
        console.log(post);
        renderPostInPostPage(post);
      });

    container.appendChild(postContainerEl);
  }
};
