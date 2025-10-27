// class-user-system.js
class User {
  constructor(username) {
    this.username = username;
  }
  greet() {
    return `Hello ${this.username}`;
  }
}
const u = new User("Rishi");
console.log(u.greet());
