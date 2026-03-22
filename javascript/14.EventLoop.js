console.log("Start");
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 100);
console.log("End");

// Start
// End
// Promise
// Timeout