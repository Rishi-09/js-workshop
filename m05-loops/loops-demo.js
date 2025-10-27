/*
  module-05-loops/loops-demo.js
  Purpose: Demonstrate for, while, and do..while loops.
*/

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(`for: ${i}`);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("while:", j);
  j++;
}

// do..while loop (executes at least once)
let k = 1;
do {
  console.log("do..while:", k);
  k++;
} while (k <= 3);

// try: create infinite loop then break out: while(true) { break; }
