// problem 1

function reverseString(str) {
  return str.split("").reverse().join("");
}

// problem 2

function countVowels(str) {
  let vowels = "aeiouAEIOU"; // includes uppercase too
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); // 3

// problem 3

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// problem 4

function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([5, 1, 9, 3])); // 9

// problem 5

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// problem 4
// problem 4
// problem 4
// problem 4
// problem 4

