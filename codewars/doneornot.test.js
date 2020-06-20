const {
  allElementsAreIntegers,
  allNumbersAreInRange,
  allNumbersAreUnique,
  doneOrNot,
  getSudokuBox,
  hasValidBoxes,
  hasValidColumns,
  hasValidRows,
  isValidSudokuNumberList,
} = require("./doneornot");

// TODO - write tests for all other functions

describe("allElementsAreIntegers", () => {
  test("returns false if list contains a non-integer", () => {
    expect(allElementsAreIntegers(["1"])).toEqual(false);
  });
  test("returns true if list only contains integers", () => {
    expect(allElementsAreIntegers([1])).toEqual(true);
  });
});

describe("allNumbersAreUnique", () => {
  test("returns true when list only has unique numbers", () => {
    expect(allNumbersAreUnique([1, 2, 3])).toEqual(true);
  });
  test("returns false when list only has duplicate numbers", () => {
    expect(allNumbersAreUnique([1, 2, 2])).toEqual(false);
  });
});

describe("doneOrNot", () => {
  test("returns success message for valid board", () => {
    expect(
      doneOrNot([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ])
    ).toEqual("Finished!");
  });

  test("returns error message for incorrect board", () => {
    expect(
      doneOrNot([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 0, 3, 4, 9],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9],
      ])
    ).toEqual("Try again!");
  });
});
