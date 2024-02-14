// function countOccurrences(string, character) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       count++;
//     }
//   }

//   return count;
// }

// const countOccurrences = (string, character) => {
//   const itemsLength = string.split(character).length - 1;

//   return itemsLength;
// };

const countOccurrences = (string, character) =>
  string.split(character).length - 1;

module.exports = countOccurrences;
