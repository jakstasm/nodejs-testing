//Kata instructions: Given a string of words, you need to find the highest scoring word.
function high(x) {
	const words = x.split(' ');
	const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');

	const valueArr = words.map((word) =>
		word
			.split('')
			.map((letter) => {
				for (let i = 0; i < alph.length; i++) {
					if (letter === alph[i]) {
						return i + 1;
					}
				}
			})
			.filter((value) => value > 0)
			.reduce((a, b) => a + b)
	);

	const indexOfHiWord = valueArr.indexOf(Math.max(...valueArr));
	return words[indexOfHiWord];
}
module.exports = high;
