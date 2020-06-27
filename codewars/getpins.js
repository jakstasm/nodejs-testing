/* Kata instructions: He noted the PIN 1357, but he also said, it is possible that each of the digits he 
saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. 
instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
 It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations 
 for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs 
 (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the 
 results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.
*/
function getPINs(observed) {
  const poss = {
    "1": ["1", "2", "4"],
    "2": ["1", "2", "3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3", "5", "6", "9"],
    "7": ["4", "7", "8"],
    "8": ["5", "7", "8", "9", "0"],
    "9": ["6", "8", "9"],
    "0": ["8", "0"],
  };

  const arrayOfPINs = [];
  const obsArr = observed.split("");

  if (obsArr.length < 2) {
    return poss[obsArr];
  }

  if (obsArr.length === 2) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        arrayOfPINs.push(el1 + el2);
      });
    });
  }

  if (obsArr.length === 3) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          arrayOfPINs.push(el1 + el2 + el3);
        });
      });
    });
  }

  if (obsArr.length === 4) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          poss[obsArr[3]].forEach((el4) => {
            arrayOfPINs.push(el1 + el2 + el3 + el4);
          });
        });
      });
    });
  }

  if (obsArr.length === 5) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          poss[obsArr[3]].forEach((el4) => {
            poss[obsArr[4]].forEach((el5) => {
              arrayOfPINs.push(el1 + el2 + el3 + el4 + el5);
            });
          });
        });
      });
    });
  }

  if (obsArr.length === 6) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          poss[obsArr[3]].forEach((el4) => {
            poss[obsArr[4]].forEach((el5) => {
              poss[obsArr[5]].forEach((el6) => {
                arrayOfPINs.push(el1 + el2 + el3 + el4 + el5 + el6);
              });
            });
          });
        });
      });
    });
  }
  if (obsArr.length === 7) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          poss[obsArr[3]].forEach((el4) => {
            poss[obsArr[4]].forEach((el5) => {
              poss[obsArr[5]].forEach((el6) => {
                poss[obsArr[6]].forEach((el7) => {
                  arrayOfPINs.push(el1 + el2 + el3 + el4 + el5 + el6 + el7);
                });
              });
            });
          });
        });
      });
    });
  }
  if (obsArr.length === 8) {
    poss[obsArr[0]].forEach((el1) => {
      poss[obsArr[1]].forEach((el2) => {
        poss[obsArr[2]].forEach((el3) => {
          poss[obsArr[3]].forEach((el4) => {
            poss[obsArr[4]].forEach((el5) => {
              poss[obsArr[5]].forEach((el6) => {
                poss[obsArr[6]].forEach((el7) => {
                  poss[obsArr[7]].forEach((el8) => {
                    arrayOfPINs.push(
                      el1 + el2 + el3 + el4 + el5 + el6 + el7 + el8
                    );
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  return arrayOfPINs;
}
module.exports = getPINs;
