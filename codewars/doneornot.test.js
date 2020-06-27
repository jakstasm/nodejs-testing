/* eslint-disable no-undef */
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

describe("allNumbersAreInRange", () => {
  test("returns true when list only has numbers from 1 to 9", () => {
    expect(allNumbersAreInRange([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(true);
  });
  test("returns false when list contains numbers outside the 1-9 range", () => {
    expect(allNumbersAreInRange([1, 2, 6, 10, 9, 0, 8, 5, 3])).toEqual(false);
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

describe("hasValidRows", () => {
  test("returns true when all rows meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidRows([
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
    ).toEqual(true);
  });
  test("returns false when when any of the rows does not meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidRows([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 4, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ])
    ).toEqual(false);
  });
});

describe("hasValidColumns", () => {
  test("returns true when all columns meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidColumns([
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
    ).toEqual(true);
  });
  test("returns false when when any of the columns does not meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidColumns([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 4, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 7],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ])
    ).toEqual(false);
  });
});

describe("getSudokuBox", () => {
  // continue working on
  test("returns the correct array of numbers for the box specified", () => {
    expect(
      getSudokuBox(
        [
          [5, 3, 4, 6, 7, 8, 9, 1, 2],
          [6, 7, 2, 1, 9, 5, 3, 4, 8],
          [1, 9, 8, 3, 4, 2, 5, 6, 7],
          [8, 5, 9, 7, 6, 1, 4, 2, 3],
          [4, 2, 6, 8, 5, 3, 7, 9, 1],
          [7, 1, 3, 9, 2, 4, 8, 5, 6],
          [9, 6, 1, 5, 3, 7, 2, 8, 4],
          [2, 8, 7, 4, 1, 9, 6, 3, 5],
          [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ],
        1
      )
    ).toEqual([6, 7, 8, 1, 9, 5, 3, 4, 2]);
  });
  test("returns the correct array of numbers for the box specified", () => {
    expect(
      getSudokuBox(
        [
          [5, 3, 4, 6, 7, 8, 9, 1, 2],
          [6, 7, 2, 1, 9, 5, 3, 4, 8],
          [1, 9, 8, 3, 4, 2, 5, 6, 7],
          [8, 5, 9, 7, 6, 1, 4, 2, 3],
          [4, 2, 6, 8, 5, 3, 7, 9, 1],
          [7, 1, 3, 9, 2, 4, 8, 5, 6],
          [9, 6, 1, 5, 3, 7, 2, 8, 4],
          [2, 8, 7, 4, 1, 9, 6, 3, 5],
          [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ],
        8
      )
    ).toEqual([2, 8, 4, 6, 3, 5, 1, 7, 9]);
  });
});

describe("hasValidBoxes", () => {
  test("returns true when all boxes meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidBoxes([
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
    ).toEqual(true);
  });
  test("returns false when when any of the boxes does not meet the conditions specified for a valid sudoku number list", () => {
    expect(
      hasValidBoxes([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 8, 9],
      ])
    ).toEqual(false);
  });
});

describe("isValidSudokuNumberList", () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
  const array3 = [1, 2, 3, 5, 5, 6, 0.7, 8, 9];
  const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 8.9];
  const array5 = [1, 2, 3, 4, 5, 6, 7, 9];
  test("returns true when an array: (a) contains 9 elements & (b) all its elements are integers & (c) all integers are within the 1-9 range & (d) all elements are unique", () => {
    expect(isValidSudokuNumberList(array1)).toEqual(true);
  });
  test("returns false when any of conditions (a) to (c) is not met", () => {
    expect(isValidSudokuNumberList(array2)).toEqual(false);
    expect(isValidSudokuNumberList(array3)).toEqual(false);
    expect(isValidSudokuNumberList(array4)).toEqual(false);
    expect(isValidSudokuNumberList(array5)).toEqual(false);
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
