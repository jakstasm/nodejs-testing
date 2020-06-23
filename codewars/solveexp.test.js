const {
	solveExpression,
	allDigitsInTwoArrays,
	findOperatorIndex,
	operation,
	possibleDigitsForPlaceholder,
	legitNumber,
	arrayToNum
} = require('./solveexp');

describe('solveExpression', () => {
	test('returns 2 as a replacement for "?" in the following rune: "1+1=?"', () => {
		expect(solveExpression('1+1=?')).toEqual(2);
	});
	test('returns 6 as a replacement for "?" in the following rune: "123*45?=5?088"', () => {
		expect(solveExpression('123*45?=5?088')).toEqual(6);
	});
	test('returns 0 as a replacement for "?" in the following rune: "-5?*-1=5?"', () => {
		expect(solveExpression('-5?*-1=5?')).toEqual(0);
	});
	test('returns -1 as the following rune is unsolvable: "19--45=5?"', () => {
		expect(solveExpression('19--45=5?')).toEqual(-1);
	});
	test('returns 5 as a replacement for "?" in the following rune: "??*??=302?"', () => {
		expect(solveExpression('??*??=302?')).toEqual(5);
	});
	test('returns 2 as a replacement for "?" in the following rune: "?*11=??"', () => {
		expect(solveExpression('?*11=??')).toEqual(2);
	});
	test('returns 2 as a replacement for "?" in the following rune: "??*1=??"', () => {
		expect(solveExpression('??*1=??')).toEqual(2);
	});
	test('returns -1 as the following rune is unsolvable: "??+??=??"', () => {
		expect(solveExpression('??+??=??')).toEqual(-1);
	});
});

describe('allDigitsInTwoArrays', () => {
	test('returns (as strings) all digits that two arrays of strings contain', () => {
		expect(allDigitsInTwoArrays([ '5', '?', '8', '-', '1' ], [ '4', '3', '1' ])).toEqual([
			'5',
			'8',
			'1',
			'4',
			'3',
			'1'
		]);
	});
});

describe('findOperatorIndex', () => {
	test('returns operator index in an array, with + or - or * as its single operator', () => {
		expect(findOperatorIndex([ '-', '5', '-', '-', '6' ])).toEqual(2);
	});
});

describe('operation', () => {
	test('calculates value of an operation on two numbers given the operator specified as string', () => {
		expect(operation(6, 7, '*')).toEqual(42);
	});
});

describe('possibleDigitsForPlaceholder', () => {
	test('returns a combination of arrays where the placeholder, in one or more places, is replaced with all possible digits', () => {
		expect(possibleDigitsForPlaceholder([ '-', '3', '?', '9', '?' ], '?')).toEqual([
			[ '-', '3', '0', '9', '0' ],
			[ '-', '3', '1', '9', '1' ],
			[ '-', '3', '2', '9', '2' ],
			[ '-', '3', '3', '9', '3' ],
			[ '-', '3', '4', '9', '4' ],
			[ '-', '3', '5', '9', '5' ],
			[ '-', '3', '6', '9', '6' ],
			[ '-', '3', '7', '9', '7' ],
			[ '-', '3', '8', '9', '8' ],
			[ '-', '3', '9', '9', '9' ]
		]);
	});
});

describe('legitNumber', () => {
	test('returns true if a given array with numbers as strings can be converted into a valid integer, i.e. one not starting with zero', () => {
		expect(legitNumber([ '-', '3', '0', '5' ])).toEqual(true);
	});
	test('returns false if a given array with numbers as strings starts with zero', () => {
		expect(legitNumber([ '-', '0', '3', '5' ])).toEqual(false);
	});
});

describe('arrayToNum', () => {
	test('reduces an array of integers as strings into an integer value', () => {
		expect(arrayToNum([ '-', '5', '0' ])).toEqual(-50);
		expect(arrayToNum([ '-', '5', '0' ])).not.toEqual(50);
	});
});
