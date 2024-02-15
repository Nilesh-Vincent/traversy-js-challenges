function findMaxNumber(array) {
  return Math.max(...array);
}

// In here finding the max number and how many occurences are there
// function findMaxNumber(array) {
//   const maxNum = Math.max(...array);

//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === maxNum) {
//       count++;
//     }
//   }
//   console.log(`count is ${count}`);
//   return maxNum;
// }

function findMaxNumber(array) {
  let maxNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

module.exports = findMaxNumber;
