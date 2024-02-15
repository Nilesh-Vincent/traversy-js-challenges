function countVowels(string) {
  const lowerCaseString = string.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerCaseString.length; i++) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(lowerCaseString[i])) count = count + 1;
  }

  return count;
}

module.exports = countVowels;
