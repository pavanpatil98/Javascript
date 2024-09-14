//console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", () => {
  //console.log("Dom content loaded");
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo");
  const removeButton = document.getElementById("removeTodo");

  const todo = todoInput.addEventListener("change", function (event) {
    const todoText = event.target.value;
    event.target.value = todoText.trim();
    console.log(todoText);
  });

  const submit = submitButton.addEventListener("click", function (event) {
    const todoText = todoInput.value;
    if (todoText.trim() == "") {
      alert("Please provide some value for the todo");
    } else {
      console.log("Setting the value for the todo");
      addTodoLocalStorage(todoText);
    }
  });

  const remove = removeButton.addEventListener("click", function (event) {
    removeTodos();
  });

  /*const todos = loadTodos();
  todos.todoList.forEach((todoText) => {
    addTodos(todoText);
  });*/
});

function addTodos(text) {
  const todoListParent = document.getElementById("todoList");
  const todo = document.createElement("li");
  todo.textContent = text;
  todoList.appendChild(todo);
}

function removeTodosHTML() {
  /*const todoListParent = document.getElementById("todoList");
  const todo = document.createElement("li");
  document.remov;
  todo.textContent = text;
  todoList.appendChild(todo);*/
  console.log("Removing list elements");
  const ul = document.getElementById("todoList"); // Select the ul element
  ul.innerHTML = '';
  
}

function addTodoLocalStorage(todoText) {
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  addTodos(todoText);
}

function loadTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  document.getElementById("todoList");
  console.log(todos);
  return todos;
}

function removeTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  if (todos.todoList.length > 0) {
    localStorage.setItem("todos", JSON.stringify({ todoList: [] }));
  }
  removeTodosHTML();
}
