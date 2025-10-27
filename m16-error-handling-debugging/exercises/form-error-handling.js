function validateForm(name) {
  if (!name || name.length < 3) {
    throw new Error("Name must be at least 3 characters long");
  }
  return true;
}

try {
  validateForm("Al");
} catch (e) {
  console.log("Validation failed:", e.message);
}
