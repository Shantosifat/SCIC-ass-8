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


