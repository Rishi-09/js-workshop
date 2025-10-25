/*
  File: script.js
  Purpose: Show how scripts load & interact with HTML.
  Concepts covered:
    - DOM readiness
    - defer vs async
    - manipulating elements
    - event handling (button click)
*/

// To prevent re-running if loaded multiple times
if (!window.__scriptDemoInitialized) {
  window.__scriptDemoInitialized = true;

  console.log("🪄 script.js initialized. Document state:", document.readyState);

  // Function to update the #output paragraph
  function showMessage() {
    const el = document.getElementById("output");
    if (!el) return;
    const msg = `✅ Script executed! Document state: ${document.readyState}`;
    el.innerText = msg;
    console.log(msg);
  }

  // Wait for DOM to load if necessary
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showMessage);
  } else {
    showMessage();
  }

  // Handle button click
  document.addEventListener("click", (e) => {
    if (e.target.id === "btn") {
      const el = document.getElementById("output");
      const newMsg = document.createElement("div");
      newMsg.innerText = `🕐 Button clicked at ${new Date().toLocaleTimeString()}`;
      el.appendChild(newMsg);
      console.log("Button clicked! DOM updated.");
    }
  });
}

/*
  🧪 Experiment:
  1. Remove 'defer' or 'async' in index.html and observe console logs.
  2. Notice how inline script runs before or after external scripts.
  3. Observe when DOMContentLoaded fires.
*/
