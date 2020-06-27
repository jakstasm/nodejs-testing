/**
 * Kata instructions:
 *
 * Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
 * If the board is valid return 'Finished!', otherwise return 'Try again!'
 */

function allElementsAreIntegers(arr) {
  return arr.every((el) => Number.isInteger(el));
}

function allNumbersAreInRange(arr) {
  return arr.every((el) => el > 0 && el < 10);
}

function allNumbersAreUnique(arr) {
  const mem = {};
  for (let i = 0; i < arr.length; i += 1) {
    const thisValue = arr[i];
    if (mem[thisValue] !== undefined) return false;
    mem[thisValue] = true;
  }
  return true;
}

function isValidSudokuNumberList(arr) {
  return (
    arr.length === 9 &&
    allElementsAreIntegers(arr) &&
    allNumbersAreInRange(arr) &&
    allNumbersAreUnique(arr)
  );
}

function hasValidRows(board) {
  for (let i = 0; i < 9; i += 1) {
    const thisRow = board[i];
    if (!isValidSudokuNumberList(thisRow)) return false;
  }
  return true;
}

function hasValidColumns(board) {
  for (let i = 0; i < 9; i += 1) {
    const thisColumn = board.map((row) => row[i]);
    if (!isValidSudokuNumberList(thisColumn)) return false;
  }
  return true;
}

function getSudokuBox(board, boxIndex) {
  const firstColumnIdx = (boxIndex % 3) * 3;
  const firstRowIdx = Math.floor(boxIndex / 3) * 3;
  let box = [];
  for (let i = 0; i < 3; i += 1) {
    box = box.concat(
      board[firstRowIdx + i].slice(firstColumnIdx, firstColumnIdx + 3)
    );
  }
  return box;
}

function hasValidBoxes(board) {
  for (let i = 0; i < 9; i += 1) {
    const thisBox = getSudokuBox(board, i);
    if (!isValidSudokuNumberList(thisBox)) return false;
  }
  return true;
}

// Main function to use from this file:
function doneOrNot(board) {
  return hasValidRows(board) && hasValidColumns(board) && hasValidBoxes(board)
    ? "Finished!"
    : "Try again!";
}

module.exports = {
  allElementsAreIntegers,
  allNumbersAreInRange,
  allNumbersAreUnique,
  doneOrNot,
  getSudokuBox,
  hasValidBoxes,
  hasValidColumns,
  hasValidRows,
  isValidSudokuNumberList,
};
