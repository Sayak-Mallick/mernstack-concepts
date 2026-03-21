// 1. Default Binding
function greet() {
  console.log(this);
}
greet();

// 2. Implicit Binding
const User = {
  name: "Rahul",
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
};

User.greet();

// 3. Explicit Binding

const greetUser = User.greet.bind(User);
greetUser();

// 4. new Binding (Constructor call)

function User1(name) {
  this.name = name;
};
const u = new User1("Rahul");
console.log(u.name);


// 5. Arrow Functions

const User2 = {
  name: "Rahul",
  greet: function() {
    const inner= () => {
      console.log(`Hello ${this.name}`);
    };
    inner();
  }
}

User2.greet();
