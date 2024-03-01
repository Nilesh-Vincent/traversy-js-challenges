function areAllCharactersUnique(string) {
  const charCount = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!charCount.includes(char)) {
      charCount.push(char);
    } else if (charCount.includes(char)) {
      return false;
    }
  }
  return true;
  // please look for the given solutions as well cuz this is unque :)
}

module.exports = areAllCharactersUnique;
