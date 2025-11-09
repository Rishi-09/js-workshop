// try-catch.js
try {
  // Simulate an error
  const x = y + 1; // ReferenceError: y is not defined
} catch (err) {
  console.error("Caught error:", err && err.message);
} finally {
  console.log("Finally always runs");
}



// Try and catch 
try
 { 
console.log(x);
} 
catch (error){
 console.log("Error name:", error.name); 
console.log("Oops! Something went wrong:", error.message);
}





// try and catch with finally

try {
  console.log("Trying risky code...");
  throw new Error("Server failed");
} catch (err) {
  console.log("Caught:", err.message);
} 
finally {
  console.log("Cleanup: Closing connections...");
}




// try and catch with multiple catch block with validation

function processUserData(user) {
  try {
      console.log("Processing user data...");
      
      try {
          if (!user.email) {
              throw new Error("User email is required");
          }
          // Validate email format
          if (!user.email.includes('@')) {
              throw new Error("Invalid email format");
          }
      } catch (validationError) {
          console.error("Validation failed:", validationError.message);
          throw validationError; // Re-throw to outer catch
      }
      
      console.log("User data processed successfully");
      
  } catch (error) {
      console.error("User processing failed:", error.message);
  }
}

// Test
processUserData({ name: "John", email: "john@example.com" });
processUserData({ name: "Jane", email: "invalid-email" });
