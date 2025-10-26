// Mini Project: Simple To-Do App (array operations)

let todos = ["Code", "Eat", "Sleep"];

// Add a task
todos.push("Repeat");

console.log("All tasks:");
todos.forEach(task => console.log(task));

// Remove a completed task
todos = todos.filter(task => task !== "Eat");
console.log("Updated tasks:", todos);
