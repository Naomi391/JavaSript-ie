function toggleClass(selector) {
  const buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains("js-toggled")) {
    turnOffButton();
    buttonElement.classList.add("js-toggled");
  }
}

function turnOffButton() {
  const prevButton = document.querySelector("js-toggled");
  if (prevButton) {
    prevButton.classList.remove("js-toggled");
  }
}
