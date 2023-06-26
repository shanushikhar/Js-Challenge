const arr = [1, 2, 4, 5, 6, 2, 4, 7];

function removeArray(num) {
  let obj = {};
  for (let x of num) {
    if (obj[x] == x) return false;
    else {
      obj[x] = true;
    }
  }
  return Object.keys(obj);
}

console.log(removeArray(arr).map((x) => Number(x)));
console.log([...new Set(arr)]);

let unique = [];
arr.filter((x) => (unique.includes(x) ? null : unique.push(x)));
console.log(unique);

/*************find duplicates & position************* */
const items = [1, 2, 3, 2];

function containsDuplicate(arr) {
  let items = {};
  for (let i of arr) {
    if (items[i]) return [i, true];
    else {
      items[i] = true;
    }
  }
  return false;
}

const values = containsDuplicate(items);
console.log(values);
