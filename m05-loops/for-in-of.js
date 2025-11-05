//yha object aur array use hoge jada tension na lo , enke bare mei kal he padhne wale ho 
//basics dekh lo bss

let student = { name: "IronMan", grade: "A", passed: true };

// for...in for objects
for(let key in student) {
  console.log(key, ":", student[key]);
}

// for...of for arrays
let heroes = ["Black Widow", "HawkEye", "Bucky Barnes"];

for (let index in heroes) {   // 'index' gives position
  console.log(index + " → " + heroes[index]); // index + name
}

