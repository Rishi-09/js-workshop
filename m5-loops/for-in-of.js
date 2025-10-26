let student = { name: "IronMan", grade: "A", passed: true };

// for...in for objects
for(let key in student) {
  console.log(key, ":", student[key]);
}

// for...of for arrays
let nums = ["Black Widow", "HawkEye", "Bucky Barnes"];
for(let num of nums) {
  console.log(num * 2);
}
