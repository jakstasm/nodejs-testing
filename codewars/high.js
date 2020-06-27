// Kata instructions: Given a string of words, you need to find the highest scoring word.
function high(x) {
  const words = x.split(" ");
  const alph = "abcdefghijklmnopqrstuvwxyz".split("");

  const valueArr = words.map((word) =>
    word
      .split("")
      .map((letter) => {
        let letterValue;
        for (let i = 0; i < alph.length; i += 1) {
          if (letter === alph[i]) {
            letterValue = i + 1;
          }
        }
        return letterValue;
      })
      .filter((value) => value > 0)
      .reduce((a, b) => a + b)
  );

  const indexOfHiWord = valueArr.indexOf(Math.max(...valueArr));
  return words[indexOfHiWord];
}
module.exports = high;
