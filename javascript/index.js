// Data url
const dataURL = "/data/posts.json";

const renderIndexHTML = (htmlPage) => {
  let indexHTML = document.querySelector(".body-container");
  indexHTML.innerHTML = htmlPage;
};

// Landing page main
const landingPageMainContainer = document.querySelector(".landingMain");

// Landing page button
const landingPageButton = document.querySelector(".landing-page-button");

landingPageButton.addEventListener("click", () => {
  // console.log("landing btn clicked");
  landingPageMainContainer.style.display = "none";
  renderIndexHTML(homePageHTML);
  homePageGlobalFunction();
});

// Register page funcs

const renderRegisterPage = (regiserPage) => {
  renderIndexHTML(regiserPage);

  // function validation() {
  //   if (document.Formfill.fName.value.length < 3) {
  //     document.getElementById("result").innerHTML =
  //       "First name should be atleast 3 letters*";
  //     return false;
  //   } else if (document.Formfill.lName.value.length < 3) {
  //     document.getElementById("result").innerHTML =
  //       "Last name should be atleast 3 letters*";
  //     return false;
  //   } else if (document.Formfill.password.value.length < 8) {
  //     document.getElementById("result").innerHTML =
  //       "Password should be atleast 8 characters*";
  //     return false;
  //   } else if (
  //     document.Formfill.cPassword.value !== document.Formfill.password.value
  //   ) {
  //     document.getElementById("result").innerHTML = "Password does not match*";
  //     return false;
  //   } else if (
  //     document.Formfill.password.value == document.Formfill.cPassword.value
  //   ) {
  //     registered.classList.add("open-slide");
  //     return false;
  //   }
  // }

  // const registered = document.getElementById("#registered");

  const loginLink = document.querySelector(".login-link");

  const registerContainer = document.querySelector(".container");

  loginLink.addEventListener("click", () => {
    registerContainer.style.display = "none";
    renderIndexHTML(homePageHTML);
    homePageGlobalFunction();
  });
};

// Landing Page js

const outputText = document.querySelector(".output");
let typeSpeed = 150;
let id = 0;
const words = ["Welcome to TechBlog"];

const color = "#83194e";
let res;

let charCount = 0;
const pauseTime = 10;
let time = setInterval(type, typeSpeed);
function type() {
  res = words[id].substring(0, charCount);

  outputText.computedStyleMap.color = color;
  if (charCount >= words[id].length + pauseTime) {
    clearInterval(time);
    charCount = 1;
  }
  outputText.innerHTML = res;
  charCount++;
}

// HomePage global function

const homePageGlobalFunction = () => {
  // Header
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((i) => i.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  // Function to open the login popup
  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  };

  // Function to close the login popup
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // Function to open the newsletter popup
  function openNewsletter() {
    document.querySelector(".newsletterPopup").style.display = "flex";
  }

  // Function to close the newsletter popup
  function closeNewsletter() {
    document.querySelector(".newsletterPopup").style.display = "none";
  }

  // Event listeners for login popup
  document.querySelector(".open-button").addEventListener("click", (event) => {
    event.stopPropagation();
    openForm();
  });

  // Event listeners for newsletter popup
  document
    .getElementById("NewsletterPopUp")
    .addEventListener("click", function (event) {
      event.preventDefault();
      openNewsletter();
    });

  document
    .querySelector(".newsletterPopup .close-button")
    .addEventListener("click", closeNewsletter);

  // Close the login popup when clicking outside of it
  window.addEventListener("click", function (event) {
    const form = document.getElementById("myForm");
    if (
      event.target !== form &&
      !form.contains(event.target) &&
      form.style.display === "block"
    ) {
      closeForm();
    }
  });

  const registerButtonLink = document.querySelector(".create-account-link");

  registerButtonLink.addEventListener("click", () => {
    renderRegisterPage(registerPageHTML);
  });

  // Selctors
  const postsContainer = document.querySelector(".main-posts-container");
  const trendingPostsContainer = document.querySelector(
    ".trending-posts-container"
  );
  const showMoreButton = document.querySelector(".load-more-button");

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

  fetchPosts();
};

let homePageHTML = `
  <header class="header">
        <nav class="navbar">
          <!-- Logo -->
          <a href="#" class="nav-logo"
            ><img class="nav-logo" src="/assets/logos/navbar-logo.png" alt="Logo "
          /></a>
  
          <!-- Search bar -->
          <div class="search-form">
            <div class="search-wrapper">
              <i class="fas fa-search search-icon"></i>
              <input type="text" class="search-input" placeholder="Search" />
            </div>
          </div>
  
          <!-- Desktop Nav menu -->
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">Post</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" id="NewsletterPopUp">Newsletter</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">About Us</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Sample</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link open-button" onclick="openForm()"
                >Log in</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Contact</a>
            </li>
          </ul>
  
          <!-- Hamburger nav menu -->
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
  
        <!-- Login popup -->
        <div class="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Login</h1>
            <!-- <label for="email"><b>Email</b></label> -->
            <input type="text" placeholder="Enter E-mail" name="email" required />
            <!-- <label for="psw"><b>Password</b></label> -->
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button type="submit" class="login-form-button">Login</button>
            <p class="new-reader">
              New reader?
              <a href="#" class="create-account-link">Create an account.</a>
            </p>
          </form>
        </div>
  
        <!-- Newsletter Popup -->
        <div class="newsletterPopup" style="display: none">
          <div class="newsletterPopup-content">
            <span class="close-button">Close</span>
            <h1>Join our e-mail list!</h1>
            <br />
            <p>Sign up for our weekly updates</p>
            <form>
              <input type="email" placeholder="Your email address" required="" />
              <p>Coming soon...</p>
            </form>
          </div>
        </div>
      </header>
      <main id="main">
        <div class="proggres-bar">
          <div class="filled"></div>
        </div>
        <div class="main-containers">
          <section class="main-container">
            <div class="trending-posts-container">
              <div class="trending-heading-container">
                <h2 class="trending-heading">
                  <span
                    ><img
                      src="./assets/logos/only logo.png"
                      alt=""
                      width="20px" /></span
                  ><i>Trending posts</i>
                </h2>
                <!-- <div class="post-container">
                  <div class="blog-post">
                    <div class="blog-post_img">
                      <img
                        src="assets/image for posts/post-test.jpg"
                        alt=""
                        width="100px"
                      />
                    </div>
                    <div class="blog-post_info">
                      <h1 class="blog-post_title">POST ONE</h1>
                      <p class="blog-post_text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga aliquid nihil quod nisi mollitia assumenda quae
                        reiciendis molestiae eligendi, fugit ducimus, odit
                        expedita quo ratione necessitatibus. Eum unde autem
                        aperiam!
                      </p>
                      <div class="blog-post_button_and_date">
                        <div>
                          <button class="blog-post_button">Read More</button>
                        </div>
                        <div class="blog-post_date">
                          <small>Author</small>
                          <small>Jun 06 2024</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="heading-posts-div">
              <h2 class="main-posts-heading">
                <span
                  ><img
                    src="./assets/logos/only logo.png"
                    alt=""
                    width="20px" /></span
                ><i>Newest posts</i>
              </h2>
            </div>
            <div class="main-posts-button-container">
              <div class="main-posts-container">
                <!-- <div class="post-container">
                <div class="blog-post">
                  <div class="blog-post_img">
                    <img
                      src="assets/image for posts/post-test.jpg"
                      alt=""
                      width="100px"
                    />
                  </div>
                  <div class="blog-post_info">
                    <h1 class="blog-post_title">POST THREE</h1>
                    <p class="blog-post_text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                      aliquid nihil quod nisi mollitia assumenda quae reiciendis
                      molestiae eligendi, fugit ducimus, odit expedita quo ratione
                      necessitatibus. Eum unde autem aperiam!
                    </p>
                    <div class="blog-post_button_and_date">
                      <div>
                        <button class="blog-post_button">Read More</button>
                      </div>
                      <div class="blog-post_date">
                        <small>Author</small>
                        <small>Jun 06 2024</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
              </div>
              <div class="load-more-button-div">
                <button class="load-more-button">Show More</button>
              </div>
            </div>
            <!-- <div class="show-more-div">
              <button class="show-more-btn">Show More</button>
            </div> -->
          </section>
          <section class="side-container">
            <div class="ad-container-one">
              <img
                src="../assets/images for ad/ad-one.jpg"
                alt="ad image"
                width="260px"
              />
            </div>
            <div class="ad-container-two">
              <img
                src="../assets/images for ad/ad-two.jpg"
                alt="ad image"
                width="260px"
              />
            </div>
            <div class="ad-container-two">
              <img
                src="../assets/images for ad/ad-three.jpg"
                alt="ad image"
                width="260px"
              />
            </div>
          </section>
        </div>
      </main>
      <footer id="footer">
        <div class="divflex">
          <section class="footer-section">
            <section>
              <img
                class="logo"
                src="../assets/logos/logo.png"
                title="logo"
                alt="logo"
              />
              <address class="address">
                <li>Ul.Makedonija bb</li>
                <li>1000,Skopje</li>
                <li>+00389 02 2465672</li>
                <li>info@techspehere.com.mk</li>
              </address>
  
              <span class="social-links">
                <h2>Follow Us</h2>
                <a href="#"
                  ><img
                    class="facebook"
                    src="../assets/image for social media/facebook_145802.png"
                    alt="Facebook"
                /></a>
                <a href="#"
                  ><img
                    class="instagram"
                    src="../assets/image for social media/instagram_2111463.png"
                    alt="Instagram"
                  />
                </a>
                <a href="#"
                  ><img
                    class="linkedin"
                    src="../assets/image for social media/linkedin_145807.png"
                    alt="Linkedin"
                  />
                </a>
              </span>
            </section>
            <section class="infoone">
              <menu>
                <h2>Support</h2>
                <li><a href=""> Contact</a></li>
                <li><a href=""> Help Center</a></li>
                <li><a href=""> Site Map</a></li>
                <li><a href=""> Professional Services</a></li>
              </menu>
            </section>
            <section class="infotwoo">
              <menu>
                <h2>Company</h2>
                <li><a href=""> About Us</a></li>
                <li><a href=""> Careers</a></li>
                <li><a href=""> Newsroom</a></li>
                <li><a href=""> Resources</a></li>
              </menu>
            </section>
          </section>
        </div>
        <section class="infothree">
          <li><a href=""> Terms of use</a></li>
          <li><a href=""> Privacy Notice</a></li>
          <li><a href=""> Cookie Policy</a></li>
          <li><a href=""> FAQ</a></li>
        </section>
        <section class="footer-botom">
          Copyright &copy; 2024 - All Rights Reserved - TECH Sphere
        </section>
      </footer>
  `;

let landingPageHTML = `<main class="landingMain">
        <div class="landingTechDiv">
          <div>
            <img
              class="logo"
              src="./assets/LandingPageImg/symbol.png"
              alt="logo"
            />
          </div>
          <div>
            <p class="first">TECH Sphere</p>
          </div>
        </div>
        <div class="landingTextDiv">
          <p class="output"><strong></strong></p>
          <button class="btn">Get Started</button>
        </div>
      </main>`;

let registerPageHTML = `<div class="container">
      <div class="form-box">
        <form action="" name="Formfill" onsubmit="return validation()">
          <h2>Register</h2>
          <p id="result"></p>
          <div class="input-box">
            <i class="bx-bxs-user"></i>
            <input type="text" name="fName" placeholder="First Name" required />
          </div>
          <div class="input-box">
            <i class="bx-bxs-user"></i>
            <input type="text" name="lName" placeholder="Last Name" required />
          </div>
          <div class="input-box">
            <i class="bx-bxs-envelope"></i>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input-box">
            <i class="bx-bxs-lock-alt"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="input-box">
            <i class="bx-bxs-lock-alt"></i>
            <input
              type="password"
              name="Password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="button-register-div">
            <input
              type="submit"
              class="register-button-submit"
              onclick="validation()"
              value="Register"
            />
          </div>
          <div class="group">
            <span class="login-link"
              >Already have an account? <a href="#">Login</a></span
            >
          </div>
        </form>
      </div>
      <div class="registered" id="registered">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <h2>Congratulations</h2>
        <p>You were registered successfuly!</p>
        <a href="#"><button>OK</button></a>
      </div>
    </div>`;

// Fetch function for posts data in homepage

// Calling proggres bar function for working

// updateProgresBarFilled();

// fetchPosts();
