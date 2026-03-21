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