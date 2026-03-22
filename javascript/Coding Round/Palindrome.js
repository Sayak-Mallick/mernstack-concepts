function isPalindrome(str) {
  const clean = str.toLowerCase();
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    } else {
      left++;
      right--;
    }
    return true;
  }
}

console.log(isPalindrome("racecar"))
