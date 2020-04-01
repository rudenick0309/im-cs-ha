/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/
var TimeComplexity = {
  FIX_ME: "wrong answer",
  CONSTANT: "constant",
  LOGARITHMIC: "logarithmic",
  LINEAR: "linear",
  QUADRATIC: "quadratic",
  EXPONENTIAL: "exponential"
};
exports.TimeComplexity = TimeComplexity;

// Problem 1: Sum the squares of the values in a given array.

/*
 * Complexity: 엘리먼트가 하나 추가 될 수록, 처리해야 할 단계가 비례적으로 증가하기 때문입니다.
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: Update this constant

var sumSquares = function(array) {
  return array.reduce(function(memo, val) {
    return memo + Math.pow(val, 2);
  });
}; //O(lg(exponent))/*END SOLUTION*/

// Problem 2: Calculate the n-th power of given number.

/*
 * Complexity: 로가리즘의 정확한 설명은 어렵습니다. 다만, constant가 아니고, 엘리먼트(처리해야 할 원소)가 늘어날 수록,
                              단계가 비례적으로 상승하는 것은 아니라고 생각했습니다. 그래서, linear는 아니라고 생각했습니다.
                              constant보다는 크지만, linear보다는 작다고 생각하여 로가리즘이라고 선택했습니다.
 */
/*START SOLUTION*/ exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: Update this constant

var nthPower = function(base, exponent) {
  // Base case:
  if (exponent === 0) {
    return 1;
    // If exponent is odd
  } else if (exponent % 2 !== 0) {
    return base * nthPower(base, exponent - 1);
    // If exponent is even
  } else {
    return nthPower(base * base, exponent / 2);
  }
}; //O(3^n)/*END SOLUTION*/

// Problem 3: Generate every sequence of throws for an n-round rock-paper-scissors game.

/*
 * Complexity: 라운드가 1게임 증가할 때, 처리해야 할 단계가 지수적으로 증가하기 때문입니다.
 */
/*START SOLUTION*/ exports.rockPaperScissorsTimeComplexity =
  TimeComplexity.EXPONENTIAL; // TODO: Update this constant

var rockPaperScissors = function(rounds) {
  var sequences = [];
  var plays = ["rock", "paper", "scissors"];

  var generate = function(sequence, round) {
    // Base case:
    if (round === rounds) {
      sequences.push(sequence);
    } else {
      plays.forEach(function(play) {
        generate(sequence.concat(play), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
};
