"use strict";

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Open-close hidden menu

const omniHeader = document.querySelector(".omnifood-header");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const headerButton = document.querySelector(".header-button");

menuButton.addEventListener("click", function () {
  omniHeader.classList.toggle("nav-open");
});
