// dom-manipulation.js
const greetBtn = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
const list = document.getElementById("list");

greetBtn.addEventListener("click", function () {
  const name = input.value.trim();
  if (name === "") {
    alert("Please enter a name");
    return;
  }
  const li = document.createElement("li");
  li.innerText = `Hello, ${name}!`;
  list.appendChild(li);
  input.value = "";
});
