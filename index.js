// Problem 1: Write a function that takes a string and returns it reversed. ( Reverse a String)
function reverseString(str) {
  return str.split("").reverse().join("");
}


// Problem 2: Write a function that counts how many vowels (a, e, i, o, u) are in a given string. (Count Vowels in a String)
function countVowel(str) {
  const vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}


// Problem 3: Write a function that checks if a string is a palindrome (reads the same forward and backward). (Check for PalindromeCheck for Palindrome)
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}


// Problem 4: Write a function that takes an array of numbers and returns the largest number. (Find the Maximum Number)
function findMaxNumber(arr) {
  return Math.max(...arr);
}


// Problem 5: Write a function that removes all duplicate numbers from an array. (Remove Duplicates from an Array)
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// Problem 6: Write a function that returns the sum of all numbers in an array. ( Sum of All Numbers in an Array)
function sumOfNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


// Problem 7: Write a function that returns all even numbers from a given array. (Find Even Numbers in an Array)
function findEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}


//Problem 8: Write a function that capitalizes the first letter of each word in a string. (Capitalize First Letter of Each Word)
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


//Problem 9: Write a function that calculates the factorial of a number using a loop. (Find the Factorial of a Number)
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


// Problem 10: Write a function that prints numbers from 1 to 20. (PingPong Challenge )
function pingpong() {
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
pingpong();
