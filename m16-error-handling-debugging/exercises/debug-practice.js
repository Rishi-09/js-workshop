// debug-practice.js
// Intentionally buggy function for debugging practice
function addUser(users, username) {
  if (!users) users = []; // ensure array
  users.push({ name: username });
  return users;
}

console.log(addUser(null, "Rishi")); // debug and inspect
