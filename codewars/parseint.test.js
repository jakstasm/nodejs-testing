/* eslint-disable no-undef */
const parseInt = require("./parseint");

test('parses "one" to 1', () => {
  expect(parseInt("one")).toBe(1);
});
test('parses "twenty" to 20', () => {
  expect(parseInt("twenty")).toBe(20);
});
test('parses "two hundred forty-six" to 246', () => {
  expect(parseInt("two hundred forty-six")).toBe(246);
});
test('parses "two hundred fifty-three thousand seven hundred forty-six" to 253746', () => {
  expect(
    parseInt("two hundred fifty-three thousand seven hundred forty-six")
  ).toBe(253746);
});
