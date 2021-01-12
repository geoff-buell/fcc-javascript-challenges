// Project Euler: Problem 4: Largest Palindrome Product

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  // Find the largest possible multiple to start from,
  // given how many digits the multiples both have.
  let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
  // + operator treats it as a string before rejoining
  // Ex. - if n is 2, then ["9" + "9"] will equal 99
  // Next find the smallest possible multiple.
  let min = (max + 1) / 10; 
  // Ex. - again, if n is 2, min will start with 10
  let results = []; // Store results from the loop.
  // Start 2 loops, both starting at max for efficiency.
  for (let i = max; i > min; i--) {
    for (let j = max; j > min; j--) {
      let num = i * j;
      // Take num and reverse it.
      let reverseNum = [...String(num)].reverse().join("");
      // If num is the same as reverseNum, it's a palindrome.
      if (num == reverseNum) {
        results.push(num); // Add number to results array.
        break; // Break for efficiency.
      }
    }
  }
  // Return largest num in array
  return Math.max(...results); 
}