// DOM elements

const todoInput = document.querySelector(".todoInput");
const addBtn = document.querySelector(".addBtn");
const todoText = document.querySelector(".todoText");
const check = document.querySelector(".check");
const edit = document.querySelector(".edit");
const deleteList = document.querySelector(".delete");
const todoContener = document.querySelector(".todoContener");

const todoList = [];
let currentTodoIndex = null;
let btnStatus = "add";

function addTodoAndEditTodo() {
  let value = todoInput.value;
  if (value.trim().length < 1) alert("Todo to'ldirilmagan!!!");

  if (btnStatus === "add") {
    const todo = {
      text: value,
      checked: false,
    };

    todoList.unshift(todo);
  } else if(btnStatus === "edit"){
    todoList[currentTodoIndex].text = value;

  }

  todoInput.value = "";
  btnStatus = "add";
  addBtn.innerHTML = "Add";
  renderTodoList();
}

function renderTodoList() {
  let result = "";
  let index = 0;
  for (let todo of todoList) {
    const checked = todo.checked;
    result += `<div class="box">
                <div class="flex">
                    <input type="checkbox" class="check" ${
                      todo.checked ? "checked" : ""
                    } onclick = "checkedTodo(${index})">
                <div class="flex-in">
                    <button class="edit fa fa-edit" onclick = "editTodo(${index})"></button>
                    <button class="delete fa fa-trash" onclick = "deleteTodo(${index++})"></button>
                </div>
                </div>
                <p class="todoText ${checked ? "checked" : ""}">${todo.text}</p>
                </div>`;
  }

  todoContener.innerHTML = result;
}

function deleteTodo(deleteTodoIndex) {
  todoList.splice(deleteTodoIndex, 1);
  alert("Rosdan ham todoni o'chirmoqchimisiz?");

  renderTodoList();
}

function checkedTodo(checkTodoIndex) {
  const todo = todoList[checkTodoIndex];
  todo.checked = !todo.checked;
  console.log(todo);

  todoList.splice(checkTodoIndex, 1);
  todoList.push(todo);

  renderTodoList();
}

function editTodo(editTodoIndex) {
  currentTodoIndex = editTodoIndex;
  const currentTodo = todoList[currentTodoIndex];
  todoInput.value = currentTodo.text;
  addBtn.innerHTML = "Edit";
  btnStatus = "edit";
}

//  event listener

addBtn.addEventListener("click", addTodoAndEditTodo);

renderTodoList();
