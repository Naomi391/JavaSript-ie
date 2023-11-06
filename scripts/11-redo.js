const todoList = [
  { name: "cook", dueDate: "22/06/2023" },
  { name: "eat", dueDate: "22/06/2023" },
];
renderList();

function renderList() {
  let listHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const listObject = todoList[i];
    const name = listObject.name;
    const dueDate = listObject.dueDate;

    const html = `<p>${name} ${dueDate}<button onclick="todoList.splice(${i},1);
    renderList();">Delete</button></p>`;
    listHTML += html;
  }
  console.log(listHTML);

  document.querySelector(".js-todo-list").innerHTML = listHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dueDateInput = document.querySelector(".js-due-date-input");
  const dueDate = dueDateInput.value;

  todoList.push({ name: name, dueDate: dueDate });
  console.log(todoList);

  inputElement.value = "";

  renderList();
}
