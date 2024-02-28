// This is th opposite I did a mistake

// function arrayIntersection(arrayone, arraytwo) {
//   let array = [];
//   for (let i = 0; i < arrayone.length; i++) {
//     if (!arraytwo.includes(arrayone[i])) {
//       array.push(arrayone[i]);
//     }
//     if (!arrayone.includes(arraytwo[i])) {
//       array.push(arraytwo[i]);
//     }
//   }
//   return array;
// }

// module.exports = arrayIntersection;

function arrayIntersection(arrayone, arraytwo) {
  let array = [];
  for (let i = 0; i < arrayone.length; i++) {
    if (arraytwo.includes(arrayone[i]) && !array.includes(arrayone[i])) {
      array.push(arrayone[i]);
    }
  }
  return array;
}

module.exports = arrayIntersection;
