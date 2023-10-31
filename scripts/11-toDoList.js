const toDo = [
  {
    name: "make dinner",
    dueDate: "2023 - 10 - 31",
  },
  {
    name: "call Mom",
    dueDate: "2023 - 10 - 31",
  },
];

renderList();

function renderList() {
  let htmlActivities = "";

  for (let i = 0; i < toDo.length; i++) {
    const activitiesObject = toDo[i];
    const name = activitiesObject.name;
    const dueDate = activitiesObject.dueDate;
    const html = `<div>${name}</div> <div>${dueDate}</div> 
    <button onclick="
    toDo.splice(${i}, 1);
    renderList();
    " class="delete-button">Delete</button> `;

    htmlActivities += html;
  }

  document.querySelector(".js-to-do-list").innerHTML = htmlActivities;
}

function addToDo() {
  const inputElement = document.querySelector(".js-the-list");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date");
  const dueDate = dateInputElement.value;

  toDo.push({
    name: name,
    dueDate: dueDate,
    //name,
    //dueDate
  });

  inputElement.value = "";
  renderList();
}
