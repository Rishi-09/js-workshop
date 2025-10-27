// fetch-simulated.js
// Without network, simulate fetch using Promise
function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: 200, json: () => ({ msg: "OK", url }) }), 300);
  });
}

fakeFetch("/api/data").then(res => res.json()).then(data => console.log("Data:", data));
