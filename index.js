/* get elements */
const buttonEl = document.getElementById("button");
const formEL = document.querySelector("form");

console.log(formEL);

function updateList() {
  const inputEl = document.getElementById("task");
  let ListEl = document.querySelector(".inner-list");
  if (inputEl.value != "") {
    console.log(ListEl);
    const newTask = document.createElement("li");
    newTask.textContent = inputEl.value;
    ListEl.appendChild(newTask);
    inputEl.value = "";
    inputEl.style.border = "none";
  } else {
    inputEl.style.border = "1px red solid";
  }
}

/* Add listeners */
buttonEl.addEventListener("click", updateList);
formEL.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit event", event);
});
