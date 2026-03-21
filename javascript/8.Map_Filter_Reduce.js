const products = [
  { name: "Shirt", price: 1000, inStock: true },
  { name: "Pants", price: 500, inStock: true },
  { name: "Shoes", price: 2000, inStock: false },
];

const names = products.map((product) => product.name);
console.log("🚀 ~ names:", names);
const availableItem = products.filter((product) => product.instock);
console.log("🚀 ~ availableItem:", availableItem);
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log("🚀 ~ total:", total);

const availableStockCost = products
  .filter((p) => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log("🚀 ~ availableStockCost:", availableStockCost);
