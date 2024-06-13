// Data url
const dataURL = "/data/posts.json";

// Selctors
const postsContainer = document.querySelector(".main-posts-container");
const showMoreButton = document.querySelector(".load-more-button");

const fetchPosts = async () => {
  try {
    const response = await fetch("/javascript/data/posts.json");
    const data = await response.json();

    console.log(data);
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

// Button show more funcs

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

fetchPosts();
