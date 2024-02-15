//Easier Version
// function reverseString(string) {
//   const words = string.split("");
//   return words.reverse().join("");
// }

function reverseString(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }

  return reversedString;
}

module.exports = reverseString;
