const students = [];

// Add
function addStudent(obj) {
  const id = students.length + 1;
  const student = { id, ...obj };
  students.push(student);
  return student;
}

// List
function listStudents() {
  return students;
}

// Find by name
function findStudent(name) {
  return students.find(s => s.name === name);
}

// Update marks
function updateMarks(id, marks) {
  const s = students.find(x => x.id === Number(id));
  if (s) s.marks = marks;
  return s;
}

// CLI
if (typeof process !== "undefined" && process.argv) {
  const [cmd, arg] = process.argv.slice(2);
  if (cmd === "add") {
    try {
      const parsed = JSON.parse(arg);
      console.log(addStudent(parsed));
    } catch (e) {
      console.log("Invalid JSON object. Example: node ... add '{\"name\":\"A\",\"marks\":85}'");
    }
  } else if (cmd === "list") {
    console.log(listStudents());
  } else if (cmd === "find") {
    console.log(findStudent(arg));
  } else if (cmd === "update") {
    const [id, marks] = process.argv.slice(3, 5);
    console.log(updateMarks(id, Number(marks)));
  } else {
    console.log("Commands: add <json>, list, find <name>, update <id> <marks>");
  }
}

/*
  Try:
  - Add validation (ensure marks is number).
  - Persist to file (fs) or localStorage (browser).
*/