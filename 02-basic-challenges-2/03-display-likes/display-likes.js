// If no one likes it, it should return 'no one likes this'
// If one person likes it, it should return '{name} likes this'
// If two people like it, it should return '{name1} and {name2} like this'
// If three people like it, it should return '{name1}, {name2} and {name3} like this'
// If more than three people like it, it should return '{name1}, {name2} and {x} others like this'

function displayLikes(array) {
  if (array.length === 0) {
    return "no one likes this";
  } else if (array.length === 1) {
    return `${array[0]} likes this`;
  } else if (array.length === 2) {
    return `${array[0]} and ${array[1]} like this`;
  } else if (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} like this`;
  } else {
    return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
  }
}

module.exports = displayLikes;
