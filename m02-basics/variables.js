//COMMENT - used to give description about the code 
// tushar mera naam hai 

// two types single line comment and multi line comment

// 1 . this is a single line comment

/* 2. this is a multi line comment
   which can span multiple lines
   useful for detailed explanations
*/

// this is something
// nice 

// Variable Declaration
let myname;
let place;

// Variable Initialization (assigning values)
myname = "Tushar";
let myage = 20;

// Declaration + Initialization together
let city = "Pune";


// Declaring variables using let, const, and var

let age = 20; // Can change later

const username = "GDG"; // Cannot be changed

var isStudent = true; // var is older and less used

console.log(age, username, isStudent);  //(Accessing) the variables


// You can also update (reassign) variable values
age = 21;
console.log("Updated Age:", age);

username = "NewName"; // This will cause an error because username is a const

// Best Practices:
// 1. Use meaningful variable names
// 2. Prefer 'let' and 'const' over 'var'
// 3. Use 'const' by default, 'let' if you need to reassign
// 4. Follow consistent naming conventions (e.g., camelCase)



// 🟩 Basic Features & Rules of JavaScript
// 20 second Dyan se sunno 

// 🧠 1. Case Sensitive (Name - name different)

// 🧱 2. Variable Declaration Keywords (let , const , var)

// 🚫 3. Cannot Start with a Number

// let 1name = "Tushar"; // ❌ Error

// let name1 = "Tushar"; // ✅ Works


// 🔤 4. Can Contain Letters, Digits, $, and _ Only
// let user_name = "Amit";
// let $price = 100;
// let _data = "Test";

// ⚙️ 5. Cannot Use Reserved Keywords
// let for = 10; // ❌ Error: 'for' is a reserved keyword

// 🧩 6. Must Be Declared Before Use
// let name = "Tushar";
// console.log(name); // ❌ ReferenceError



// 🧊 7. const Must Be Initialized at Declaration
// const pi = 3.14; // ✅ OK
// const name;      // ❌ Error – Missing initializer

// ⚡ 10. Semicolons Are Optional




//5 main types of cases used in programming (short and clear):

// camelCase → used in JS variables & functions → firstName

// PascalCase → used in class names → StudentData

// snake_case → used in file names or Python → user_name user namexxxxxx user_name

// kebab-case → used in URLs or CSS classes → main-container

// UPPER_CASE → used for constants → MAX_VALUE ; c c++ java ; line execute 





