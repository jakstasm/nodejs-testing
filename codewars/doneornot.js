/**
 * Kata instructions:
 *
 * Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
 * If the board is valid return 'Finished!', otherwise return 'Try again!'
 */

function onlyHasNumbers(arr) {
  return arr.every((el) => Number.isInteger(el));
}

function hasNumbersWithinRange(arr) {
  return arr.every((el) => el > 0) && arr.every((el) => el < 10);
}

function allNumbersAreUnique(arr) {
  const mem = {};
  for (let i = 0; i < arr.length; i += 1) {
    const thisValue = arr[i];
    if (mem[thisValue]) return false;
    mem[thisValue] = true;
  }
  return true;
}

function isValidNumberList(arr) {
  return (
    onlyHasNumbers(arr) &&
    hasNumbersWithinRange(arr) &&
    allNumbersAreUnique(arr)
  );
}

function hasValidRows(board) {
  for (let i = 0; i < board.length; i += 1) {
    const thisRow = board[i];
    if (!isValidNumberList(thisRow)) return false;
  }
  return true;
}

function hasValidColumns(board) {
  const columns = board.map((row, idx) => board.map((row) => row[idx]));
  for (let i = 0; i < columns.length; i += 1) {
    if (!isValidNumberList(columns[i])) return false;
  }
  return true;
}

function getSudokuBox(board, boxIndex) {
  const firstColumnIdx = (boxIndex % 3) * 3;
  const firstRowIdx = Math.floor(boxIndex / 3) * 3;
  let box = [];
  for (let i = 0; i < 3; i++) {
    box = box.concat(
      board[firstRowIdx + i].slice(firstColumnIdx, firstColumnIdx + 3)
    );
  }
  return box;
}

function hasValidBoxes(board) {
  const boxes = board.map((row, idx) => getSudokuBox(board, idx));
  for (let i = 0; i < boxes.length; i += 1) {
    if (!isValidNumberList(boxes[i])) return false;
  }
  return true;
}

function doneOrNot(board) {
  return hasValidRows(board) && hasValidColumns(board) && hasValidBoxes(board)
    ? "Finished!"
    : "Try again!";
}

module.exports = {
  allNumbersAreUnique,
  doneOrNot,
  getSudokuBox,
  hasNumbersWithinRange,
  hasValidBoxes,
  hasValidColumns,
  hasValidRows,
  isValidNumberList,
  onlyHasNumbers,
};
