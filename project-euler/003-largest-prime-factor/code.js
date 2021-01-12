// Project Euler: Problem 3: Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function largestPrimeFactor(num) {
  let prime = 2; // first prime number
  let maxPrime; // establish maxPrime
  while (prime <= num) { // while prime is less than or equal to num, excecute the following
    if (num % prime === 0) { // if num divided by prime leaves no remainder
      maxPrime = prime; // then maxPrime equals prime
      num = num / prime; // num then equals num divided by prime
    } else { 
      prime++; // prime = prime + 1 
    }
  }
  return maxPrime; 
}