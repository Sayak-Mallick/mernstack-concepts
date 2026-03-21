const clickbutton = document.getElementById("clickbutton");

function throttle(func, delay) {
  let shouldCall = true;
  return function (...args) {
    if (!shouldCall) return;
    func(...args);
    shouldCall = false;
    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}

const buttonClicked = () => {
  console.log("Button Clicked");
};

clickbutton.addEventListener("click", throttle(buttonClicked, 500));
