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
