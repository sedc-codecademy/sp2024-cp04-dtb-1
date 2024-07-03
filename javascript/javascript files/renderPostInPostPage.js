import { renderIndexHTML } from "./globalRenderHTML.js";
import { navbarFunction } from "./navbar.js";

export const renderPostInPostPage = (post) => {
  console.log(post);

  let postPageHTML = `
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
           <a class="post-button-nav">Post</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" id="NewsletterPopUp">Newsletter</a>
         </li>
         <li class="nav-item">
           <a class="about-us-button">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link open-button" onclick="openForm()"
             >Log in</a
           >
         </li>
         <li class="nav-item">
           <a class="contact-button">Contact</a>
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
        <div class="container_page">
        <div class="post-page-header-container">
            <h1 class="post-page-hader-h1">${post.title}</h1>
        </div>
        <div>
            <div class="post-page-image-div-container">
              <img src="${post.image}" alt="Campfire for Vision Pro" class="main-image">
            </div>
            <div class="post-page-text-div-container">
            <p>${post.text}</p>
            <p>#${post.tag}</p>
            </div>
            <div class="btn">
                <button><i class="fa-regular fa-star" onclick="ChangeIcon(this)"></i></button>
                <button><i class="fa-solid fa-share-nodes"></i></button>
            </div>
        </div>
        <div class="comment-post-page-div-container">
        <div class="container_comment">
            <div class="head">
                <h1>COMMENT</h1>
            </div>
            <div><span id="comment">0</span> Comments</div>
            <div class="text">
                <p>We are happy to hear from you!</p>
            </div>
            <div class="comments"></div>
            <div class="commentbox">
                <img src="photo/user.jpg" alt="">
                <div class="content">
                    <h2>Comment as: </h2>
                    <input type="text" placeholder="Enter your name" class="user">
                    <div class="commentinput">
                        <input type="text" placeholder="Enter comment" class="usercomment">
                        <div class="buttons">
                            <button type="submit" id="publish">PUBLISH</button>
                        </div>
                    </div>
                    <p class="policy">This site is procted by reCAPTCHA and the Google <a href="">privacy policy</a> and
                        <a href="">Terms of Service</a> apply.
                    </p>
                </div>
            </div>
        </div>
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
    </footer>`;

  // let ChangeIcon = function (icon) {
  //   icon.classList.toggle("fa-star-half-stroke");
  // };

  // const USERID = {
  //   name: null,
  //   identity: null,
  //   image: null,
  //   message: null,
  //   date: null,
  // };

  // const userComment = document.querySelector(".usercomment");
  // const publishBtn = document.querySelector("#publish");
  // const comments = document.querySelector(".comments");
  // const userName = document.querySelector(".user");
  // const notify = document.querySelector(".notifyinput");

  // userComment.addEventListener("input", () => {
  //   if (!userComment.value) {
  //     publishBtn.setAttribute("disabled", "disabled");
  //     publishBtn.classList.remove("abled");
  //   } else {
  //     publishBtn.removeAttribute("disabled");
  //     publishBtn.classList.add("abled");
  //   }
  // });

  // function addPost() {
  //   if (!userComment.value) return;
  //   USERID.name = userName.value;
  //   if (USERID.name === "Anonymous") {
  //     USERID.identity = false;
  //     USERID.image = "photo/profile.jpg";
  //   } else {
  //     USERID.identity = true;
  //     USERID.image = "photo/user.jpg";
  //   }

  //   USERID.message = userComment.value;
  //   USERID.date = new Date().toLocaleString();
  //   let published = `<div class="parents">
  //                       <img src="${USERID.image}">
  //                       <div>
  //                           <h1>${USERID.name}</h1>
  //                           <p>${USERID.message}</p>
  //                           <span class="date">${USERID.date}</span>
  //                       </div>
  //                   </div>`;

  //   comments.innerHTML += published;
  //   userComment.value = "";
  //   publishBtn.classList.remove("abled");

  //   let commentsNum = document.querySelectorAll(".parents").length;
  //   document.getElementById("comment").textContent = commentsNum;
  // }

  // publishBtn.addEventListener("click", addPost);

  let indexHTML = document.querySelector(".body-container");
  renderIndexHTML(indexHTML, postPageHTML);
  navbarFunction();
  history.pushState({}, "", "/post");
};
