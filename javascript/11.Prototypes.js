const animal = {
  eat() {
    console.log("eating");
  },
};

const dog = {
  bark() {
    console.log("woof!");
  },
};

Object.setPrototypeOf(dog, animal);
dog.eat();
dog.bark();

console.log(dog.__proto__);
console.log(dog.__proto__ === animal);

console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("eat"));

// Adding methods using prototype

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  console.log(`Hi I'm ${this.name}`);
};

User.prototype.isAdult = function () {
  return this.age >= 18;
};

const u1 = new User("Rahul", 20);
const u2 = new User("Priya", 16);
u1.greet();
u2.greet();
console.log(u1.isAdult());
console.log(u2.isAdult());
