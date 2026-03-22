const original = { name: "Rahul", address: { city: "Mumbai" } };

// Shallow Copy
const shallowCopy = { ...original };
shallowCopy.name = "Sayak";
shallowCopy.address.city = "Pune";

console.log(original);
console.log(shallowCopy);

// Deep Copy
const deepCopy = structuredClone(original);

deepCopy.name = "Sayak";
deepCopy.address.city = "Kolkata";

console.log(original);
console.log(deepCopy);
