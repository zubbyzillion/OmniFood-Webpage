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

//////////////////////////////////////
//Smooth Scrolling Animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click",function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        // Scroll back to Top
        if (href === "#")
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    })
})