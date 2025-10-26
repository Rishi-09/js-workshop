/*
  module-08-objects/object-basics.js
  Purpose: Create, access, modify, and iterate objects.
*/

const student = {
  name: "Pushpaa",
  age: 41,
  subjects: ["JS", "maths"],
  contact: {
    email: "pushpa@example.com",
  },
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log("student.name:", student.name);
console.log("student['age']:", student["age"]);
console.log("greet:", student.greet());

// Modify properties
student.age = 52;
student.contact.phone = "9999999999";

// Add new property
student.grade = "A";

// Delete a property
delete student.grade;

// Object utilities
console.log("keys:", Object.keys(student));
console.log("values:", Object.values(student));
console.log("entries:", Object.entries(student));

// Reference vs copy
const ref = student; // shares the same object
const shallowCopy = { ...student }; // new object, but nested objects still reference same nested objects
shallowCopy.name = "Clone";
console.log("original name:", student.name);
console.log("shallow copy name:", shallowCopy.name);

// But nested change affects both
shallowCopy.contact.email = "clone@example.com";
console.log("student.contact.email after nested change:", student.contact.email);

/*
  Tip: To deep copy simple objects: JSON.parse(JSON.stringify(obj))
  (Not suitable for functions, undefined, or complex types)
*/
