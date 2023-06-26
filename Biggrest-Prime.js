const arr = [1, 4, 5, 55, 877, 9, 101];

function biggestPrime(num) {
  if (num % 2 == 0 || num < 2) return false;

  for (let x = 3; x <= Math.sqrt(num); x += 2) {
    if (num % x == 0) return false;
  }
  return true;
}

console.log(arr.sort((a, b) => a - b).findLast(biggestPrime));
