/*
  todo-dom.js
  Minimal todo implementation for exercise.
  Attach to an HTML page similar to dom-intro.html with inputs and buttons.
*/
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.innerText = text;
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  li.appendChild(doneBtn);
  todoList.appendChild(li);
  todoInput.value = "";
});
