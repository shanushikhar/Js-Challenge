/************* Biggest Prime Number
 * ********************************* */

const arr = [1, 4, 5, 55, 877, 9, 101];

function biggestPrime(num) {
  if (num % 2 == 0 || num < 2) return false;

  for (let x = 3; x <= Math.sqrt(num); x += 2) {
    if (num % x == 0) return false;
  }
  return true;
}

console.log(arr.sort((a, b) => a - b).findLast(biggestPrime));

/************* All Prime Number
 * ********************************* */

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
