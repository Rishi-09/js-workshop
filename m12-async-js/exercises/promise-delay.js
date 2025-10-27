// promise-delay.js
// Create a utility 'wait(ms)' returning a promise and use it to chain messages.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
wait(200).then(() => console.log("200ms"));
wait(400).then(() => console.log("400ms"));
