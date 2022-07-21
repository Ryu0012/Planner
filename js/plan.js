const plus = document.querySelector(".plan-plus");
const taskText = document.querySelector(".task-todo input");
const whenStart = document.querySelector(".task-when input");
const whenFinish = document.querySelector(".task-when input:last-child");
const taskDetails = document.querySelector(".task-details input");
const taskForm = document.getElementById("create-task");
const main = document.querySelector("#main");

const TODOS_KEY = "todos";
toDos = [];

// function handleClickPlus(event) {
//   event.preventDefault();
//   console.log("handleClick plus");
// }

// plus.addEventListener("click", handleClickPlus);

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // where click happen > path
  // console.dir(event.target);
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const planDiv = document.createElement("div");
  planDiv.className = "plan";
  planDiv.id = newTodo.id;

  const clockDiv = document.createElement("div");
  clockDiv.className = "plan-clock";
  const clockStart = document.createElement("span");
  clockStart.innerText = newTodo.start;
  const clockWave = document.createElement("span");
  clockWave.innerText = "~";
  const clockFinish = document.createElement("span");
  clockFinish.innerText = newTodo.finish;

  const textDiv = document.createElement("div");
  textDiv.className = "plan-text";
  const content = document.createElement("span");
  content.className = "plan-content";
  content.innerText = newTodo.text;
  const details = document.createElement("span");
  details.className = "plan-details";
  details.innerText = newTodo.detail;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const Xspan = document.createElement("span");
  Xspan.innerText = "x";

  Xspan.addEventListener("click", deleteToDo);

  clockDiv.append(clockStart);
  clockDiv.append(clockFinish);
  textDiv.appendChild(content);
  textDiv.appendChild(details);
  planDiv.appendChild(clockDiv);
  planDiv.appendChild(textDiv);
  planDiv.appendChild(checkbox);
  planDiv.appendChild(Xspan);
  main.appendChild(planDiv);
}

function handletodoSubmit(event) {
  console.log("handle task-submit");
  event.preventDefault();

  const newText = taskText.value;
  taskText.value = "";
  const newStart = whenStart.value;
  whenStart.value = "";
  const newFinish = whenFinish.value;
  whenFinish.value = "";
  const newDetails = taskDetails.value;
  taskDetails.value = "";

  const newTodoObj = {
    text: newText,
    start: newStart,
    finish: newFinish,
    detail: newDetails,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

taskForm.addEventListener("submit", handletodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
