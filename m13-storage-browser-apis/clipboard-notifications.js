// clipboard-notifications.js
// Copy text to clipboard (requires user gesture)
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied:", text);
  } catch (e) {
    console.error("Copy failed:", e);
  }
}

async function showNotification(message) {
  if (Notification && Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification && Notification.permission !== "denied") {
    const perm = await Notification.requestPermission();
    if (perm === "granted") new Notification(message);
  }
}
