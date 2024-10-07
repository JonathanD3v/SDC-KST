const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

const inputBox = document.querySelector(".input-box");
const search = document.querySelector(".search");
const closeIcon = document.querySelector(".close-icon");
search.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

function displayPopup() {
  alert("Explore our amazing Rising Desks!");
}
window.onload = function () {
  displayPopup();
};
