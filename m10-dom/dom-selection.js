// dom-selection.js
console.log("DOM selection demo started");

const title = document.getElementById("title");
const desc = document.querySelector(".desc");
const input = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const list = document.getElementById("list");

console.log("Title text:", title.innerText);
console.log("Desc textContent:", desc.textContent);
