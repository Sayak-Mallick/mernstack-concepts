const searchInput = document.getElementById("searchInput");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const myFunction = (event) => {
  const query = event.target.value;
  console.log(`The Query is: ${query}`);
};

searchInput.addEventListener("input", debounce(myFunction, 500));
