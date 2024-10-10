const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".feature__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".feature__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".feature__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".feature__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
  delay: 2000,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".specs__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".product__content img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".product__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".product__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".product__list li", {
  duration: 1000,
  interval: 500,
  delay: 1500,
});
