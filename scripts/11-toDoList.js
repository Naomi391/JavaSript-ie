const toDo = [""];

renderList();

function renderList() {
  let htmlActivities = "";

  for (let i = 0; i < toDo.length; i++) {
    const activities = toDo[i];
    const html = `<p>${activities}</p>`;

    htmlActivities += html;
  }

  console.log(htmlActivities);

  document.querySelector(".js-to-do-list").innerHTML = htmlActivities;
}

function addToDo() {
  const inputElement = document.querySelector(".js-the-list");
  const name = inputElement.value;

  toDo.push(name);
  console.log(toDo);

  inputElement.value = "";
  renderList();
}
