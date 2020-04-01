/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var printArray = function(num) {
  //num = [1,2, , [3,4], 5]
  num.forEach(function(e) {
    if (typeof e === "number") {
      console.log(e);
    } else if (Array.isArray(e)) {
      printArray(e);
    }
  });
};

module.exports = printArray;
