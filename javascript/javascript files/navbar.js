export const navbarFunction = () => {
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
};
