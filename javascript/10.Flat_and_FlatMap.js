const nested = [1,[2,3],[4, [5,6]]];
console.log(nested.flat());
console.log(nested.flat(2));
console.log(nested.flat(Infinity));

const sentence = ["Hello World", "Good Morning"];
console.log(sentence.flatMap(word => word.split(" ")));