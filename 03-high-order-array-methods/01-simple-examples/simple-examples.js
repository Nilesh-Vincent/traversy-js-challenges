const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const doubledNumbers = numbers.map((number, index, array) => {
  //   console.log(index);
  //   console.log(array);
  return number * 2;
});

//console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

//console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sumOfeachItem = numbers.reduce((accum, num) => {
  return accum + num;
}, 0);

//console.log(sumOfeachItem);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

const items = numbers.forEach((number) => {
  //   console.log(number);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const findFirstNum = numbers.find((num) => {
  return num > 2;
});

// console.log(findFirstNum);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

// console.log(hasEvenNumber);
/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumsGreaterThanZero = numbers.every((number) => {
  return number > 0;
});

console.log(allNumsGreaterThanZero);
