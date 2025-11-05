// /*
//   module-08-objects/destructuring.js
//   Purpose: Demonstrate object destructuring, defaults, nested destructuring, and renaming.
// */

const hero = {
  name: "Steve Rogers",
  role: "Captain America",
  skills: {},
  friend:{
    name:"Tony Stark",
    role:"Iron Man",
  }
};
hero["age"] = 100;

let obj = {
  name: "Popatlaal",
  age: 42,
  status: "Unmarried",
};
// Basic destructuring
const { realname, role } = hero;
console.log("Name:", realname, "Role:", role);

const config = {
  host: "localhost",
  port: 8080,
  db: { user: "admin", pass: "secret" },
};

// Default & rename
const { host: hostname = "127.0.0.1", timeout = 5000 } = config;
console.log("hostname:", hostname, "timeout:", timeout);

// Nested destructuring -Rarely used
const { db: { user: dbUser } = {} } = config;
console.log("db user:", dbUser);





/*
  Try:
  - Destructure with fallback: const { missing = 'default' } =
config;
  - Use destructuring in function parameters.
*/
