function formatPhoneNumber(num) {
  const formattedNumber = `(${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;

  return formattedNumber;
}

//check other solution specially you can use slice

module.exports = formatPhoneNumber;
