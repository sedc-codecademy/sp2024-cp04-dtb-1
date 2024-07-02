import {
  renderAboutUsPage,
  renderRegisterPage,
} from "./renderPagesFunctions.js";
import {
  registerPageHTML,
  homePageHTML,
  contactPageHTML,
  aboutUsPageHTML,
} from "./pagesHtml.js";
import { homePageGlobalFunction } from "../index.js";

export const navbarFunction = () => {
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

  // Navbar buttons

  const registerButtonLink = document.querySelector(".create-account-link");

  const bodyHistory = [];

  registerHandler();

  function registerHandler() {
    registerButtonLink.addEventListener("click", () => {
      history.pushState({}, "", "/register");
      bodyHistory.push(document.body.innerHTML);
      renderRegisterPage(registerPageHTML, homePageHTML);
    });

    document.querySelector(".contact-button").onclick = (_event) => {
      history.pushState({}, "", "/contact");
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = contactPageHTML;
      navbarFunction();
    };

    document.querySelector(".about-us-button").onclick = (_event) => {
      history.pushState({}, "", "/about");
      console.log("click");
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = aboutUsPageHTML;
      navbarFunction();
    };

    document.querySelector(".post-button-nav").onclick = (_event) => {
      history.pushState({}, "", "/");
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = homePageHTML;
      homePageGlobalFunction();
    };
  }

  onpopstate = (_event) => {
    const previousContent = bodyHistory.pop();

    console.log(previousContent);

    if (previousContent) {
      document.body.innerHTML = previousContent;
      registerHandler();
    }
  };
};
