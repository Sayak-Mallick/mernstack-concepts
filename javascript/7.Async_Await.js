function getUser() {
  return fetch("/api/user")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}

async function getUser() {
  try {
    const res = await fetch("/api/user");
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getAll() {
  try {
    // Slow performance
    const a = await fetchA();
    const b = await fetchB();

    // Fast performance
    const [a2, b2] = await Promise.all([fetchA(), fetchB()]);
  } catch (error) {
    console.error(error);
  }
}
