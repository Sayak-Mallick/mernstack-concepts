const p = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) {
    resolve("Success");
  } else {
    reject(new Error("Failed!"));
  }
});

p.then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));

const MyPromise = new Promise((resolve, reject) => {
  const sum = 5 + 5;
  if (sum === 10) {
    resolve("Fulfilled");
  } else {
    reject("Failed");
  }
});

MyPromise.then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("Done ✅"));
