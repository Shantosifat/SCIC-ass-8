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

// problem 3

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// problem 4

function findLargest(array) {
  return Math.max(...array);
}

// problem 5

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// problem 6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// problem 7

function getEvenNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    } else {
    }
  }

  return result;
}

// problem 8

function capitalizeWords2(str) {
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

// problem 9

function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// problem 10

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();
