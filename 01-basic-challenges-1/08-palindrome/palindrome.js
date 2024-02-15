// function isPalindrome(string) {
//   const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//   for (let i = 0; i <= formattedString.length; i++) {
//     const reveresedString = formattedString.split("").reverse().join("");
//     // console.log(reveresedString);
//     // console.log(formattedString);
//     if (reveresedString === formattedString) {
//       return true;
//     }
//     return false;
//   }
// }

const isPalindrome = (string) => {
  const formattedString = removenonAlphaNumeric(string.toLowerCase());
  const reversedString = reverseString(formattedString);
  if (reversedString === formattedString) {
    return true;
  }
  return false;
};

const removenonAlphaNumeric = (string) => {
  let formattedString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (isAlphaNumeric(char)) {
      formattedString = formattedString + char;
    }
  }

  return formattedString;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
};

const reverseString = (string) => {
  let reveresed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reveresed = reveresed + string[i];
  }

  return reveresed;
};

module.exports = isPalindrome;
