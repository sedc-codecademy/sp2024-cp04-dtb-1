import  postsData  from "../data/posts.json" with { type: "json" };
import { renderIndexHTML } from "./globalRenderHTML.js";
import { navbarFunction } from "./navbar.js";

export const renderPostInPostPage = (postId) => {
  let posts = postsData;
  console.log(posts);
  let postPageHTML = "";

  posts
    .filter((post) => post.id === postId)
    .map(
      (foundPost) =>
        (postPageHTML = `
      <header class="header">
      <nav class="navbar">
        <!-- Logo -->
        <a href="#" class="nav-logo"
          ><img class="nav-logo" src="/assets/logos/logo.png" alt="Logo "
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
            <a href="#" class="post-button-nav">Post</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" id="NewsletterPopUp">Newsletter</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About Us</a>
          </li>          
          <li class="nav-item">
            <a href="#" class="nav-link open-button" onclick="openForm()"
              >Log in</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="contact-button">Contact</a>
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
          <span class="close-button"><i class="fa-solid fa-xmark"></i></span>
          <h1>Join our e-mail list!</h1>
          <br />
          <p>Sign up for our weekly updates</p>
          <form>
            <input type="email" placeholder="Your email address" required="" />
            <p class="coming-soon">Coming soon...</p>
          </form>
        </div>
      </div>
    </header>
    <main id="main">
    <section class="post-page-section">
      <div class="image-post-page-div">
        <img src=${foundPost.image} alt="Post image" />
      </div>
      <div class="text-post-page-div">
        <div>
          <h2 class="post-page-title">${foundPost.title}</h2>
        </div>
        <div>
          <p class="post-page-text">${foundPost.text}/p>
        </div>
        <div>
          <strong class="post-page-tags">${foundPost.tag}</strong>
          <strong class="post-page-author-date">${foundPost.author}, ${foundPost.date}</strong>
          <strong class="post-page-rating">${foundPost.rating}</strong>
        </div>
      </div>
      <div class="comment-like-post-div"></div>
    </section>    
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
      `)
    );

  let indexHTML = document.querySelector(".body-container");  
  renderIndexHTML(indexHTML, postPageHTML);
  navbarFunction();
};
