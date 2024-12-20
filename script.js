const menuToggle = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu-list");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
