//Kata instructions: Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case. Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
function solveExpression(exp) {
	let twoSides = exp.split('=');
	let lSide = twoSides[0];
	let rSide = twoSides[1].split('');
	let opPos = [];
	let opSymb = [];
	let usedDigits = [];

	//checking operator
	//1. whether (*) and, if so, where
	for (let i = 0; i < lSide.length; i++) {
		lSide.split('');
		if (lSide[i] === '*') {
			opPos.push(i);
			opSymb.push('*');
		}
		//2. whether (+) and, if so, where
		if (lSide[i] === '+') {
			opPos.push(i);
			opSymb.push('+');
		}
		//3. whether (-) and, if so, where
		if (lSide[i] === '-' && i !== 0 && (lSide[i - 1] !== '-' && lSide[i - 1] !== '*' && lSide[i - 1] !== '+')) {
			opPos.push(i);
			opSymb.push('-');
		}
	}

	let lSideA = lSide.split('').slice(0, opPos);
	let lSideB = lSide.split('').slice(opPos);
	lSideB.shift();
	usedDigits = [ ...new Set([ ...lSideA, ...lSideB, ...rSide ]) ];

	function operation(a, b) {
		if (opSymb == '*') return a * b;
		if (opSymb == '+') return a + b;
		if (opSymb == '-') return a - b;
	}

	// create possibility arrays for each part of the equation
	let lSBposs = [];
	let lSAposs = [];
	let rSposs = [];

	for (let i = 0; i < 10; i++) {
		let oneWayB = lSideB.map((el) => {
			if (el === '?') {
				return (el = i.toString());
			} else {
				return el;
			}
		});
		lSBposs.push(oneWayB);
		let oneWayA = lSideA.map((el) => {
			if (el === '?') {
				return (el = i.toString());
			} else {
				return el;
			}
		});
		lSAposs.push(oneWayA);
		let oneWayC = rSide.map((el) => {
			if (el === '?') {
				return (el = i.toString());
			} else {
				return el;
			}
		});
		rSposs.push(oneWayC);
	}

	for (let i = 0; i < 10; i++) {
		if (
			!(lSAposs[i].length > 1 && (lSAposs[i][0] == 0 && lSAposs[i][1] == 0)) &&
			!(lSAposs[i].length > 1 && (lSAposs[i][0] == '-' && lSAposs[i][1] == 0)) &&
			!(lSAposs[i].length > 1 && lSAposs[i][0] == 0) &&
			!(lSBposs[i].length > 1 && (lSBposs[i][0] == 0 && lSBposs[i][1] == 0)) &&
			!(lSBposs[i].length > 1 && (lSBposs[i][0] == '-' && lSBposs[i][1] == 0)) &&
			!(lSBposs[i].length > 1 && lSBposs[i][0] == 0) &&
			!(rSposs[i].length > 1 && (rSposs[i][0] === 0 && rSposs[i][1] == 0)) &&
			!(rSposs[i].length > 1 && (rSposs[i][0] == '-' && rSposs[i][1] == 0)) &&
			!(rSposs[i].length > 1 && rSposs[i][0] == 0) &&
			operation(parseInt(lSAposs[i].reduce((a, b) => a + b)), parseInt(lSBposs[i].reduce((a, b) => a + b))) ===
				parseInt(rSposs[i].reduce((a, b) => a + b)) &&
			!usedDigits.some((el) => el == i)
		)
			return i;
	}

	return -1;
}
module.exports = solveExpression;
