const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 18 },
  { name: "Eve", age: 20 },
  { name: "Charlie", age: 19 },
];

console.log(users.find((user) => user.age >= 18));

console.log(users.findIndex((user) => user.age >= 18));

console.log(users.some((user) => user.age < 18));

console.log(users.every((user) => user.age >= 18));
