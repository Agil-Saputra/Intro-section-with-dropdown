const burger = document.querySelector("#burger");
const navbar = document.querySelector("#nav-menu");
const feature = document.querySelector("#feature");
const featureMenu = document.querySelector("#feature-menu");
const company = document.querySelector("#company");
const companyMenu = document.querySelector("#company-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("burger-active");
    navbar.classList.toggle("hidden");
});

feature.addEventListener("click", () => {
    featureMenu.classList.toggle("hidden");
    feature.classList.toggle("feature-after");
});

company.addEventListener("click", () => {
    companyMenu.classList.toggle("hidden");
    company.classList.toggle("company-after");
});