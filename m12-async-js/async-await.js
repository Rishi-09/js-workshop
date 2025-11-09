// async-await.js
async function run() {
  try {
    console.log("Start");
    await new Promise(r => setTimeout(r, 300));
    console.log("After 300ms");
    const res = await Promise.resolve("Finished");
    console.log(res);
  } catch (e) {
    console.error("Error:", e);
  }
}
run();

/*
    settimeout
    setinterval
    fetch
    axios
*/

console.log("1st task")

setTimeout(() => {
    console.log("2nd task")
}, 2000);

console.log("3rd task")



// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 5000);

// console.log("3")
// console.log("4")

// setTimeout(() => {
//     console.log("5")
// }, 3000);

// console.log("6")