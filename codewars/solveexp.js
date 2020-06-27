/*
Kata instructions: Given an expression, figure out the value of the rune represented by the question mark. 
If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - 
it means that he's got some of his runes wrong. output -1 in that case. Complete the method to solve the 
expression to find the value of the unknown rune. The method takes a string as a paramater repressenting 
the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
*/
function allDigitsInTwoArrays(a, b) {
  return a
    .concat(b)
    .filter((el) => parseInt(el, 10))
    .map((el) => parseInt(el, 10));
}

function findOperatorIndex(array) {
  let operatorIndex;
  if (array.indexOf("*") !== -1) operatorIndex = array.indexOf("*");
  else if (array.indexOf("+") !== -1) operatorIndex = array.indexOf("+");
  else operatorIndex = array.indexOf("-", 1);
  return operatorIndex;
}

function operation(a, b, operator) {
  let result;
  if (operator === "*") result = a * b;
  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "/") result = a / b;
  if (operator === "%") result = a % b;
  return result;
}

function possibleDigitsForPlaceholder(array, placeholder) {
  const possibilityArray = [];
  for (let i = 0; i < 10; i += 1) {
    const oneWay = array.map((el) => {
      if (el === placeholder) return i.toString();
      return el;
    });
    possibilityArray.push(oneWay);
  }
  return possibilityArray;
}

// eliminates 'numbers' starting with '0..' and/or '-0'
function legitNumber(array) {
  if (
    array.length > 1 &&
    ((array[0] === "-" && array[1] === "0") || array[0] === "0")
  )
    return false;
  return true;
}

// where array elements are numbers as strings:
function arrayToNum(array) {
  return parseInt(
    array.reduce((a, b) => a + b),
    10
  );
}

function solveExpression(exp) {
  const twoSides = exp.split("=");
  const lSide = twoSides[0].split("");
  const rSide = twoSides[1].split("");
  const opIdx = findOperatorIndex(lSide);
  const opSymbol = lSide[opIdx];
  const usedDigits = allDigitsInTwoArrays(lSide, rSide);

  const lSideA = lSide.slice(0, opIdx);
  const lSideB = lSide.slice(opIdx + 1);

  // create possibility arrays for each part of the equation
  const lSBposs = possibleDigitsForPlaceholder(lSideB, "?");
  const lSAposs = possibleDigitsForPlaceholder(lSideA, "?");
  const rSposs = possibleDigitsForPlaceholder(rSide, "?");

  for (let i = 0; i < 10; i += 1) {
    if (
      legitNumber(lSAposs[i]) &&
      legitNumber(lSBposs[i]) &&
      legitNumber(rSposs[i]) &&
      operation(arrayToNum(lSAposs[i]), arrayToNum(lSBposs[i]), opSymbol) ===
        arrayToNum(rSposs[i]) &&
      !usedDigits.some((el) => el === i)
    )
      return i;
  }
  return -1;
}
module.exports = {
  solveExpression,
  allDigitsInTwoArrays,
  findOperatorIndex,
  operation,
  possibleDigitsForPlaceholder,
  legitNumber,
  arrayToNum,
};
