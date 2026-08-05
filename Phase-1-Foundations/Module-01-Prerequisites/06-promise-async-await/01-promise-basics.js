//Promise States
//Pending: Initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully.
//Rejected: The operation failed.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false; // Change this to false to test rejection
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

//Consume with .then .catch .finally
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected).");
  });
