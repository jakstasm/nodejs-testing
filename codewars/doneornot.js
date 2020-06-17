//Kata instructions: Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
function doneOrNot(board) {
	let a = board[0];
	let b = board[1];
	let c = board[2];
	let d = board[3];
	let e = board[4];
	let f = board[5];
	let g = board[6];
	let h = board[7];
	let i = board[8];

	// checking method
	function arrCheck(arr) {
		if (
			arr.toString() === arr.filter((item, index) => arr.indexOf(item) === index).toString() &&
			arr.every((el) => el > 0) &&
			arr.every((el) => el < 10) &&
			arr.every((el) => Number.isInteger(el))
		) {
			return true;
		}
	}

	// check rows
	const rowsOK =
		(((((((arrCheck(a) === arrCheck(b)) === arrCheck(c)) === arrCheck(d)) === arrCheck(e)) === arrCheck(f)) ===
			arrCheck(g)) ===
			arrCheck(h)) ===
			arrCheck(i) && arrCheck(a) === true
			? true
			: false;

	if (!rowsOK) return 'Try again!';

	// form and check columns
	let col0 = [];
	col0.push(a[0], b[0], c[0], d[0], e[0], f[0], g[0], h[0], i[0]);
	let col1 = [];
	col1.push(a[1], b[1], c[1], d[1], e[1], f[1], g[1], h[1], i[1]);
	let col2 = [];
	col2.push(a[2], b[2], c[2], d[2], e[2], f[2], g[2], h[2], i[2]);
	let col3 = [];
	col3.push(a[3], b[3], c[3], d[3], e[3], f[3], g[3], h[3], i[3]);
	let col4 = [];
	col4.push(a[4], b[4], c[4], d[4], e[4], f[4], g[4], h[4], i[4]);
	let col5 = [];
	col5.push(a[5], b[5], c[5], d[5], e[5], f[5], g[5], h[5], i[5]);
	let col6 = [];
	col6.push(a[6], b[6], c[6], d[6], e[6], f[6], g[6], h[6], i[6]);
	let col7 = [];
	col7.push(a[7], b[7], c[7], d[7], e[7], f[7], g[7], h[7], i[7]);
	let col8 = [];
	col8.push(a[8], b[8], c[8], d[8], e[8], f[8], g[8], h[8], i[8]);

	const colsOK =
		(((((((arrCheck(col0) === arrCheck(col1)) === arrCheck(col2)) === arrCheck(col3)) === arrCheck(col4)) ===
			arrCheck(col5)) ===
			arrCheck(col6)) ===
			arrCheck(col7)) ===
			arrCheck(col8) && arrCheck(col0) === true
			? true
			: false;

	if (!colsOK) return 'Try again!';

	// form and check regions

	let reg0 = [];
	reg0.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
	let reg1 = [];
	reg1.push(a[3], a[4], a[5], b[3], b[4], b[5], c[3], c[4], c[5]);
	let reg2 = [];
	reg2.push(a[6], a[7], a[8], b[6], b[7], b[8], c[6], c[7], c[8]);
	let reg3 = [];
	reg3.push(d[0], d[1], d[2], e[0], e[1], e[2], f[0], f[1], f[2]);
	let reg4 = [];
	reg4.push(d[3], d[4], d[5], e[3], e[4], e[5], f[3], f[4], f[5]);
	let reg5 = [];
	reg5.push(d[6], d[7], d[8], e[6], e[7], e[8], f[6], f[7], f[8]);
	let reg6 = [];
	reg6.push(g[0], g[1], g[2], h[0], h[1], h[2], i[0], i[1], i[2]);
	let reg7 = [];
	reg7.push(g[3], g[4], g[5], h[3], h[4], h[5], i[3], i[4], i[5]);
	let reg8 = [];
	reg8.push(g[6], g[7], g[8], h[6], h[7], h[8], i[6], i[7], i[8]);

	const regsOK =
		(((((((arrCheck(reg0) === arrCheck(reg1)) === arrCheck(reg2)) === arrCheck(reg3)) === arrCheck(reg4)) ===
			arrCheck(reg5)) ===
			arrCheck(reg6)) ===
			arrCheck(reg7)) ===
			arrCheck(reg8) && arrCheck(reg0) === true
			? true
			: false;

	if (!regsOK) return 'Try again!';

	return 'Finished!';
}
module.exports = doneOrNot;
