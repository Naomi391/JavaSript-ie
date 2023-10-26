const toDo = [];

function addToDo() {
  const inputElement = document.querySelector(".js-the-list");
  const name = inputElement.value;

  console.log(name);

  toDo.push(name);
  console.log(toDo);

  inputElement.value = "";
}
