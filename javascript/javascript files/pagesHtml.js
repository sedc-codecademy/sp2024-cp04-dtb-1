export let homePageHTML = `
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
            <a href="#" class="nav-link">Post</a>
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
            <a href="#footer" class="nav-link">Contact</a>
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
            <div class="main-posts-filters">
              <div class="main-selects-div">
                <select class="select-filters-one">
                <option value="none" selected disabled>Sort by:</option>
                  <option value="rating">Rating</option>
                  <option value="month">Month</option>
                  <option value="date">Date</option>
                </select>
                <select class="select-filters-two">
                  <option value="none" selected disabled>Order by:</option>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </div>
              <div class="main-button-filters-div">
                <button class="posts-filter-button">Filter</button>
              </div>
            </div>        
          </div>          
          <div class="main-posts-button-container">
            <div class="main-posts-container">              
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

export let registerPageHTML = `<div class="container">
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
