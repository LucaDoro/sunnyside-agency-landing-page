const menuList = document.querySelector(".menu-list");
const menuToggle = document.querySelector(".burger-menu");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
