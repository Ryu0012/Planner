const plus = document.querySelector(".plan-plus");
const taskText = document.querySelector(".task-todo input");
const whenStart = document.querySelector(".task-when input");
const whenFinish = document.querySelector(".task-when input:last-child");
const taskDetails = document.querySelector(".task-details input");
const taskSubmit = document.getElementById("create-task");

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
    details: newDetails,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  saveToDos();
}

taskSubmit.addEventListener("submit", handletodoSubmit);
