function findDuplicates(arr) {
  const seen = new Set();
  const duplicate = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicate.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicate];
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9, 2, 1]));
