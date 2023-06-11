function getPositivesCount(arr) {
  let count = 0;
  arr.forEach(((e) => {
    if (e > 0) { count += 1; }
  }));
  return count;
}

console.log(getPositivesCount([1, 2, -2, -1]));
