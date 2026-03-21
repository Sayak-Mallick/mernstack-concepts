function introduce(city, country) {
  console.log(`Hello i am ${this.name} from ${city}, ${country}`);
}

const person = { name: "Sayak" };

introduce.call(person, "Kolkata", "India");
introduce.apply(person, ["Kolkata", "India"]);
const fn = introduce.bind(person);
fn("Mumbai", "India");

const timer = {
  seconds: 0,
  start: function() {
    // BROKEN
    setTimeout(function() {
      this.seconds++; // undefined
    }, 3000);

    // FIXED, use Arrow functions
    setTimeout(() => {
      console.log(`Seconds: ${++this.seconds}`);
    }, 3000);
  }
};

timer.start();
