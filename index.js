/* get elements */
const buttonEl = document.getElementById("button");
const formEl = document.querySelector("form");
const inputEl = document.getElementById("task");
const listEl = document.querySelector(".inner-list");
const clearButtonEl = document.getElementById("clear-todos");

const renderListItem = (item) => {
  const newTask = document.createElement("li");

  newTask.textContent = item;

  listEl.appendChild(newTask);
};

if (localStorage.getItem("todos") !== null) {
  const todosArray = localStorage.getItem("todos").split(",");

  todosArray.forEach((todo) => {
    renderListItem(todo);
  });
}

function updateList() {
  let updatedTodosString;
  let todos = localStorage.getItem("todos");

  if (inputEl.value !== "") {
    if (todos !== null) {
      updatedTodosString = todos + "," + inputEl.value;
    } else {
      updatedTodosString = inputEl.value;
    }

    localStorage.setItem("todos", updatedTodosString);
    renderListItem(inputEl.value);

    inputEl.value = "";
    inputEl.style.border = "none";
  } else {
    inputEl.style.border = "1px red solid";
  }
}

/* Add listeners */
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  updateList();
});

clearButtonEl.addEventListener("click", () => {
  localStorage.clear();
  // listEl.remove();
  listEl.textContent = "";
});
