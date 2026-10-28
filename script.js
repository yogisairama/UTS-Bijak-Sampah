const hamburgerBtn =
  document.getElementById("hamburger-btn") ||
  document.getElementById("humberger-btn");
const closeBtn = document.getElementById("icon");
const navMenu = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll("#menu a");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// 2. Tutup menu saat tombol X (close) diklik

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// 3. Tutup menu saat salah satu link navigasi diklik
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});
