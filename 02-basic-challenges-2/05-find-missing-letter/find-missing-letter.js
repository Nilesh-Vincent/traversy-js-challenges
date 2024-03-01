// function findMissingLetter(array) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alphabet.indexOf(array[0]);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i];
//     }
//   }
//   // If no letter is missing, return an empty string
//   return "";
// }

function findMissingLetter(array) {
  let start = array[0].charCodeAt(0);

  for (let i = 0; i < array.length; i++) {
    const current = array[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}

module.exports = findMissingLetter;
