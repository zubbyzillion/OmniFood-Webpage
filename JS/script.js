//////////////////////////////////////
//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date() .getFullYear();
yearEl.textContent = currentYear;


//////////////////////////////////////
//Make Mobile Navigation Work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});