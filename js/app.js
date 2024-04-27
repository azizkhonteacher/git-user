// dark vs light hodisasi

const html = document.querySelector("html");
const darcLightBtn = document.getElementById("t-b");
const darcLightBtnSpan = document.getElementById("t-b-p");

darcLightBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if ((darcLightBtnSpan.textContent = "dark")) {
    darcLightBtnSpan.textContent = "light";
  } else if ((darcLightBtnSpan.textContent = "light")) {
    darcLightBtnSpan.textContent = "dark";
  }
});
