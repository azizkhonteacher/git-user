const html = document.querySelector("html");
const changeMode = document.querySelector(".site__nav-btn");
const changeModeP = document.querySelector(".site__nav-btn p");

let dark = JSON.parse(localStorage.getItem("mode")) ? true : false;

if (dark) {
  html.classList.add("dark");
  changeModeP.textContent = "light";
} else {
  html.classList.remove("dark");
  changeModeP.textContent = "dark";
}

changeMode.addEventListener("click", () => {
  if (JSON.parse(localStorage.getItem("mode"))) {
    html.classList.remove("dark");
    localStorage.setItem("mode", false);
    changeModeP.textContent = "dark";
  } else {
    html.classList.add("dark");
    localStorage.setItem("mode", true);
    changeModeP.textContent = "light";
  }
});
