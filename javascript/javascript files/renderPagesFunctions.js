import { renderIndexHTML } from "./globalRenderHTML.js";
import { homePageGlobalFunction } from "../index.js";
import { homePageHTML } from "./pagesHtml.js";

export const renderRegisterPage = (regiserPage) => {
  let indexHTML = document.querySelector(".body-container");
  renderIndexHTML(indexHTML, regiserPage, homePageHTML);

  const loginLink = document.querySelector(".login-link");

  const registerContainer = document.querySelector(".container");

  loginLink.addEventListener("click", () => {
    registerContainer.style.display = "none";
    history.pushState({}, "", "/");
    renderIndexHTML(indexHTML, homePageHTML);
    homePageGlobalFunction();
  });
};

export const renderContactPage = (contactPage) => {
  let indexHTML = document.querySelector(".body-container");
  renderIndexHTML(indexHTML, contactPage);
  navbarFunction();
};

export const renderHomePage = (homePage) => {
  let indexHTML = document.querySelector(".body-container");
  renderIndexHTML(indexHTML, homePage);
  homePageGlobalFunction();
};
