// promises.js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(500).then(() => console.log("500ms passed"));

function asyncTask(data) {
  return new Promise((resolve, reject) => {
    if (!data) return reject("No data");
    setTimeout(() => resolve(`OK ${data}`), 200);
  });
}

asyncTask("X").then(res => console.log(res)).catch(err => console.error(err));
