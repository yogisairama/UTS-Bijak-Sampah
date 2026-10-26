const burgerMenu = document.getElementById("burger-menu");
const backMenu = document.getElementById("back-icon");
const navBar = document.getElementById("menu-navbar");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

backMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
