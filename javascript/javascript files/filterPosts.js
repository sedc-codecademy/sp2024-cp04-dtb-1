export const renderFilteredPosts = (posts, postsContainer) => {
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
