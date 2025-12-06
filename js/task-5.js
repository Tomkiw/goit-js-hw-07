function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const keyChangColor = document.querySelector(".change-color");
const span = document.querySelector(".color");
const bodyEl = document.querySelector("body");
console.log("🚀 ~ bodyEl:", bodyEl);

keyChangColor.addEventListener("click", changeColorBody);

function changeColorBody(event) {
  const color = getRandomHexColor();
  span.textContent = bodyEl.style.backgroundColor = color;
}
