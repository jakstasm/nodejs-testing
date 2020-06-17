const solveExpression = require('./solveexp');

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
