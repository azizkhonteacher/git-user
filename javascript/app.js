const html = document.querySelector("html");
const a = document.querySelector(".site__nav-btn");

a.addEventListener("click", () => {
  html.classList.toggle("dark");
});
