// Kata instructions: In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
function parseInt(string) {
  const arr = string.split(" ");

  const vocab = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  const numArr = arr
    .map((el) => el.split("-")) // remove hyphens if any
    .filter((el) => el !== "and") // remove 'and' if it's there
    .reduce((a, b) => a.concat(b)) // get relevant word array
    .map((el) => vocab[el]); // get number array

  let result = 0;

  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] === 1000000) {
      result *= 1000000;
    } else if (numArr[i] === 1000) {
      result *= 1000;
    } else if (
      numArr[i] === 100 &&
      numArr.some((el) => el === 1000) &&
      numArr.indexOf(1000) > numArr.indexOf(100) &&
      numArr.indexOf(100) === numArr.lastIndexOf(100)
    ) {
      result *= 100;
    } else if (numArr[i] === 100) {
      result = result - numArr[i - 1] + numArr[i - 1] * 100;
    } else {
      result += numArr[i];
    }
  }
  return result;
}
module.exports = parseInt;
