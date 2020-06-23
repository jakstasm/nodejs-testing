/*
Kata instructions: Given an expression, figure out the value of the rune represented by the question mark. 
If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - 
it means that he's got some of his runes wrong. output -1 in that case. Complete the method to solve the 
expression to find the value of the unknown rune. The method takes a string as a paramater repressenting 
the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
*/
function allDigitsInTwoArrays(a, b) {
	return a.concat(b).filter((el) => parseInt(el));
}

function findOperatorIndex(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] == '+' || array[i] == '*' || (array[i] == '-' && i !== 0 && array[i - 1] !== '-')) return i;
	}
}

function operation(a, b, operator) {
	if (operator == '*') return a * b;
	if (operator == '+') return a + b;
	if (operator == '-') return a - b;
	if (operator == '/') return a / b;
	if (operator == '%') return a % b;
}

function possibleDigitsForPlaceholder(array, placeholder) {
	const possibilityArray = [];
	for (let i = 0; i < 10; i++) {
		let oneWay = array.map((el) => {
			if (el == placeholder) return (el = i.toString());
			else return el;
		});
		possibilityArray.push(oneWay);
	}
	return possibilityArray;
}

//eliminates 'numbers' starting with '0..' and/or '-0'
function legitNumber(array) {
	if (array.length > 1 && ((array[0] == '-' && array[1] == '0') || array[0] == '0')) return false;
	else return true;
}

//where array elements are numbers as strings:
function arrayToNum(array) {
	return parseInt(array.reduce((a, b) => a + b));
}

function solveExpression(exp) {
	const twoSides = exp.split('=');
	const lSide = twoSides[0].split('');
	const rSide = twoSides[1].split('');
	const opIdx = findOperatorIndex(lSide);
	const opSymbol = lSide[opIdx];
	const usedDigits = allDigitsInTwoArrays(lSide, rSide);

	const lSideA = lSide.slice(0, opIdx);
	const lSideB = lSide.slice(opIdx + 1);

	// create possibility arrays for each part of the equation
	const lSBposs = possibleDigitsForPlaceholder(lSideB, '?');
	const lSAposs = possibleDigitsForPlaceholder(lSideA, '?');
	const rSposs = possibleDigitsForPlaceholder(rSide, '?');

	for (let i = 0; i < 10; i++) {
		if (
			legitNumber(lSAposs[i]) &&
			legitNumber(lSBposs[i]) &&
			legitNumber(rSposs[i]) &&
			operation(arrayToNum(lSAposs[i]), arrayToNum(lSBposs[i]), opSymbol) === arrayToNum(rSposs[i]) &&
			!usedDigits.some((el) => el == i)
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
	arrayToNum
};
