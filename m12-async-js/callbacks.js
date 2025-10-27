// callbacks.js
// Demonstrates basic callback usage and the "callback pyramid".

function doTask(data, cb) {
  console.log("Processing:", data);
  setTimeout(() => {
    cb(null, `Done ${data}`);
  }, 300);
}

doTask("A", (err, result) => {
  if (err) return console.error(err);
  console.log(result);
  doTask("B", (err2, result2) => {
    if (err2) return console.error(err2);
    console.log(result2);
  });
});
