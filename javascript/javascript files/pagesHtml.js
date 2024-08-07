export let homePageHTML = `
<header class="header">
      <nav class="navbar">
        <!-- Logo -->
        <a class="nav-logo"
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
            <a class="post-button-nav" >Posts</a>
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
          <li class="nav-item" id="toggle">
          <i class="fa-regular fa-sun"></i>
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
          <button class="login-form-button">Login</button>
          <p class="new-reader">
            New reader?
            <a class="create-account-link">Create an account.</a>
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
          <div class="trending-posts-container">            
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
                  <option value="tag">Tag</option>
                </select>
                <select class="select-filters-two">
                  <option value="none" selected disabled>Order by:</option>
                  <option value="asc">Newest</option>
                  <option value="desc">Oldest</option>
                </select>
                <select class="select-filters-three">
                <option value="none" selected disabled>Select tag:</option>
                  <option value="ai">Ai</option>
                  <option value="xbox">Xbox</option>
                  <option value="hackers">Hackers</option>
                  <option value="apple">Apple</option>
                  <option value="gaming">Gaming</option>
                </select>
                <select class="select-filters-four">
                <option value="none" selected disabled>Select month:</option>
                  <option value="0">01</option>
                  <option value="1">02</option>
                  <option value="2">03</option>
                  <option value="3">04</option>
                  <option value="4">05</option>
                  <option value="5">06</option>
                  <option value="6">07</option>
                  <option value="7">08</option>
                  <option value="8">09</option>
                  <option value="9">10</option>
                  <option value="10">11</option>
                  <option value="11">12</option>
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
          <button class="back-to-top-button"><i class="fa-solid fa-arrow-up"></i></button>
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
              <a
                ><img
                  class="facebook"
                  src="../assets/image for social media/facebook_145802.png"
                  alt="Facebook"
              /></a>
              <a
                ><img
                  class="instagram"
                  src="../assets/image for social media/instagram_2111463.png"
                  alt="Instagram"
                />
              </a>
              <a
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
              <li><a class="footer-contact-link"> Contact</a></li>
              <li><a> Help Center</a></li>
              <li><a> Site Map</a></li>
              <li><a> Professional Services</a></li>
            </menu>
          </section>
          <section class="infotwoo">
            <menu>
              <h2>Company</h2>
              <li><a class="footer-about-link"> About Us</a></li>
              <li><a> Careers</a></li>
              <li><a> Newsroom</a></li>
              <li><a> Resources</a></li>
            </menu>
          </section>
        </section>
      </div>
      <section class="infothree">
        <li><a> Terms of use</a></li>
        <li><a> Privacy Notice</a></li>
        <li><a> Cookie Policy</a></li>
        <li><a> FAQ</a></li>
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
        >Already have an account? <a class="login-link-a">Login</a></span
      >
    </div>
  </form>
</div>
<div class="registered" id="registered">
  <ion-icon name="checkmark-circle-outline"></ion-icon>
  <h2>Congratulations</h2>
  <p>You were registered successfuly!</p>
  <a><button>OK</button></a>
</div>
</div>`;

export let contactPageHTML = `<header class="header">
      <nav class="navbar">
        <!-- Logo -->
        <a class="nav-logo"
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
            <a class="post-button-nav">Posts</a>
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
          <li class="nav-item" id="toggle"><i class="fa-regular fa-sun"></i></li>
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
          <button class="login-form-button">Login</button>
          <p class="new-reader">
            New reader?
            <a class="create-account-link">Create an account.</a>
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
      <section class="contact-main">
    <div class="box">
        <div class="contact-flexbox">
        <div class="contact form">
            <h3>Send a Message</h3>
            <form>
                <div class="formBox">
                    <div class="row50">
                        <div class="inputBox">
                            <span>First Name</span>
                            <input type="text" placeholder="Enter first name">
                        </div>
                        <div class="inputBox">
                            <span>Last Name</span>
                            <input type="text" placeholder="Enter last name">
                        </div>
                    </div>

                    <div class="row50">
                    <div class="inputBox">
                        <span>Email</span>
                        <input type="text" placeholder="Enter email">
                    </div>
                    <div class="inputBox">
                        <span>Mobile</span>
                        <input type="text" placeholder="Enter phone number">
                    </div>
                </div>
                <div class="row100">
                    <div class="inputBox">
                        <span>Message</span>
                        <textarea placeholder="Write your message here..."></textarea>
                    </div>
                </div>

                <div class="send-button">
                    <div class="inputBox">
                        <button type="button">Send</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
      </div>
      <div class="info-map-flexbox">
        <div class="contact info">
            <h3>Contact info</h3>
            <div class="infoBox">
                <div>
                    <span><ion-icon name="location-outline"></ion-icon></span>
                    <p>11 Oktomvri 33a, Skopje 1000, Macedonia</p>
                </div>
                <div>
                <span><ion-icon name="mail-outline"></ion-icon></span>
                <a href="mailto:techsphere@gmail.com">techsphere@gmail.com</a>
                </div>
                <div>
                    <span><ion-icon name="call-outline"></ion-icon></span>
                    <a href="tel:+389 76 811 927">+389 76 811 927</a>
                </div>                
            </div>
        </div>    
        <div class="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2097.0027721206643!2d21.438643308167457!3d41.987187625158796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354156e09f8f943%3A0x4f70677f66ebc77c!2sQinshift%20Academy!5e0!3m2!1smk!2smk!4v1719705662759!5m2!1smk!2smk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
 </div>
</div>
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
              <a
                ><img
                  class="facebook"
                  src="../assets/image for social media/facebook_145802.png"
                  alt="Facebook"
              /></a>
              <a
                ><img
                  class="instagram"
                  src="../assets/image for social media/instagram_2111463.png"
                  alt="Instagram"
                />
              </a>
              <a
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
              <li><a class="footer-contact-link">Contact</a></li>
              <li><a> Help Center</a></li>
              <li><a> Site Map</a></li>
              <li><a> Professional Services</a></li>
            </menu>
          </section>
          <section class="infotwoo">
            <menu>
              <h2>Company</h2>
              <li><a class="footer-about-link"> About Us</a></li>
              <li><a> Careers</a></li>
              <li><a> Newsroom</a></li>
              <li><a> Resources</a></li>
            </menu>
          </section>
        </section>
      </div>
      <section class="infothree">
        <li><a> Terms of use</a></li>
        <li><a> Privacy Notice</a></li>
        <li><a> Cookie Policy</a></li>
        <li><a> FAQ</a></li>
      </section>
      <section class="footer-botom">
        Copyright &copy; 2024 - All Rights Reserved - TECH Sphere
      </section>
    </footer>`;

export let aboutUsPageHTML = `
<header class="header">
      <nav class="navbar">
        <!-- Logo -->
        <a class="nav-logo"
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
            <a class="post-button-nav">Posts</a>
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
          <li class="nav-item" id="toggle"><i class="fa-regular fa-sun"></i></li>
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
          <button class="login-form-button">Login</button>
          <p class="new-reader">
            New reader?
            <a class="create-account-link">Create an account.</a>
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
    <main class="aboutUs-container">
      <div class="aboutUs-container-one">
        <div class="aboutUs-one">
          <h2 class="aboutUs-header">About Us</h2>
          <div class="text-one">
            <p>
              Welcome to TECH Sphere Blog your go-to destination for all things
              tech! We are a passionate team of tech enthusiasts dedicated to
              bringing you the latest news, in-depth reviews, and insightful
              analysis of the ever-evolving world of technology. Our team is
              composed of experienced tech writers, analysts, and enthusiasts
              who share a deep passion for technology. With diverse backgrounds
              and expertise, we bring a balanced perspective to our content,
              ensuring it is both accurate and insightful.
            </p>
            <h3 class="aboutUs-subheader">Our Mission</h3>
            <p>
              At TECH Sphere Blog, our mission is to empower our readers with
              knowledge and insights into the tech landscape. Whether you're a
              seasoned tech guru or a curious beginner, we aim to provide
              content that is both informative and engaging, helping you stay
              ahead in a fast-paced digital world.
            </p>
          </div>
        </div>
        <div class="about-image-container-one">
          <img
            class="img-about"
            src="./assets/img for about us/about-us-image.jpg"
            width="560"
          />
        </div>
      </div>
      <div class="aboutUs-container-two">
      <div>
          <img
            class="img-about2"
            src="./assets/img for about us/wp2848527.webp"
            width="560"
          />
        </div>
        <div class="text-two">
          <h3 class="aboutUs-subheader">What We Cover</h3>
          <p>
            Tech News: Stay updated with the latest happenings in the tech
            industry, from groundbreaking innovations to emerging trends. Gadget
            Reviews: In-depth reviews and hands-on impressions of the latest
            gadgets, helping you make informed decisions. How-To Guides:
            Step-by-step tutorials and guides to help you navigate and maximize
            your tech devices and software. Opinion Pieces: Thought-provoking
            articles and commentary on the implications of tech developments and
            trends. Industry Analysis: Comprehensive analysis of market trends,
            product launches, and industry movements.
          </p>
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
              <a
                ><img
                  class="facebook"
                  src="../assets/image for social media/facebook_145802.png"
                  alt="Facebook"
              /></a>
              <a
                ><img
                  class="instagram"
                  src="../assets/image for social media/instagram_2111463.png"
                  alt="Instagram"
                />
              </a>
              <a
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
              <li><a class="footer-contact-link">Contact</a></li>
              <li><a> Help Center</a></li>
              <li><a> Site Map</a></li>
              <li><a> Professional Services</a></li>
            </menu>
          </section>
          <section class="infotwoo">
            <menu>
              <h2>Company</h2>
              <li><a class="footer-about-link"> About Us</a></li>
              <li><a> Careers</a></li>
              <li><a> Newsroom</a></li>
              <li><a> Resources</a></li>
            </menu>
          </section>
        </section>
      </div>
      <section class="infothree">
        <li><a> Terms of use</a></li>
        <li><a> Privacy Notice</a></li>
        <li><a> Cookie Policy</a></li>
        <li><a> FAQ</a></li>
      </section>
      <section class="footer-botom">
        Copyright &copy; 2024 - All Rights Reserved - TECH Sphere
      </section>
    </footer>`;
