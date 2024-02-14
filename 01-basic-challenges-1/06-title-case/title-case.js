function titleCase(sentence) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    console.log((words[i] = words[i][0].toUpperCase() + words[i].slice(1)));

    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

module.exports = titleCase;
