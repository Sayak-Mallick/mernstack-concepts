function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

const curradd = (a) => (b) => (c) => a + b + c;
console.log(curradd(1)(2)(3));
