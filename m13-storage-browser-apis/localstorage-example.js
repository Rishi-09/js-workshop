// localstorage-example.js
// Save theme preference
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
function loadTheme() {
  return localStorage.getItem("theme") || "light";
}

console.log("Current theme:", loadTheme());
saveTheme("dark");
console.log("After save:", loadTheme());
