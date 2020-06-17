const high = require('./high');

test('returns "taxi" the highest-scoring word in the following string: "man i need a taxi up to ubud"', () => {
	expect(high('man i need a taxi up to ubud')).toEqual('taxi');
});
test('returns "volcano" as the highest-scoring word in the following string: "what time are we climbing up the volcano"', () => {
	expect(high('what time are we climbing up the volcano')).toEqual('volcano');
});
test('returns "semynak" as the highest-scoring word in the following string: "take me to semynak"', () => {
	expect(high('take me to semynak')).toEqual('semynak');
});
