// Mini Project: Grade Calculator

function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
}

let studentMarks = 82;
console.log(`Grade: ${getGrade(studentMarks)}`);
