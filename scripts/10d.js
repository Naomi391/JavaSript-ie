function toggleClass() {
  const buttonElement = document.querySelector(".js-toggled");
  if (!buttonElement.classList.contains("js-toggled")) {
    buttonElement.classList.add("js-toggled");
  } else {
    buttonElement.classList.remove("js-toggled");
  }
}
