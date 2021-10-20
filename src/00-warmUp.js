// HERE ARE SOME QUICK WARM UP EXERCISES THAT USE .map, .filter, .find, .some, and .every

//USE THIS ARRAY OF NUMBERS CALLED numberArr TO TEST OUT YOUR FUNCTIONS BELOW.
//YOU CAN ALSO MAKE UP YOUR OWN ARRAYS TO PASS AS ARGUMENTS. TRY EXPERIMENTING.
let numberArr = [3, 5, 8, 4, 9];

/**
 *
 *
 *
 * * plusOne()
 *
 * * write a function that takes in an array of numbers and adds 1 to each element.
 * * use the .map array method.
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} A modified array of numbers.
 *
 * EXAMPLE:
 * plusOne([1, 2, 3])
 * > [2, 3, 4]
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * plusOne(numberArr)
 * > [4, 6, 9, 5, 10]
 *
 */
function plusOne(array) {
  
}

/**
 *
 *
 *
 * * timesTwo()
 *
 * * write a function that takes in an array of numbers and returns a new array where each element is multiplied by two.
 * * which array method should you use?
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} A modified array of numbers.
 *
 * EXAMPLE:
 * timesTwo([1, 2, 3])
 * > [2, 4, 6]
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * timesTwo(numberArr)
 * > [6, 10, 16, 8, 18]
 *
 */
function timesTwo() {}

/**
 *
 *
 *
 * * filterForOdds()
 *
 * * write a function that takes in an array of numbers and returns a new array with only odd numbers included.
 * * which array method should you use?
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} A modified array of numbers.
 *
 * EXAMPLE:
 * filterForOdds([1, 2, 3])
 * > [1, 3]
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * filterForOdds(numberArr)
 * > [3, 5, 9]
 *
 */
function filterForOdds() {}

/**
 *
 *
 *
 * * filterOddsOrEvens()
 *
 * * write a function that takes in an array of numbers and returns a new array
 * * with only odd or even numbers included, depending on the `parity` input.
 *
 * * which array method should you use?
 *
 * @param {number[]} nums - An array of numbers.
 * @param {string} parity - A string of either 'even' or 'odd' that determines whether your function filters for
 * odd or even numbers. Make it case-insensitive by using .toLowerCase or .toUpperCase
 * @returns {number[]} A modified array of numbers.
 *
 * EXAMPLE:
 * filterOddsOrEvens([1, 2, 3], even)
 * > [2]
 *
 * EXAMPLE:
 * filterOddsOrEvens([1, 2, 3], Odd)
 * > [1, 3]
 *
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * filterOddsOrEvens(numberArr, odd)
 * > [3, 5, 9]
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * filterOddsOrEvens(numberArr, eveN)
 * > [8, 4]
 *
 */
function filterOddsOrEvens() {}

/**
 *
 *
 *
 * * findTargetNum()
 *
 * * write a function that takes in an array of numbers and a targetNum and returns the targetNum.
 * * if the targetNum is not found, return undefined.
 * * which array method should you use?
 *
 * @param {number[]} nums - An array of numbers.
 * @param {number} targetNum - A target number that your function will attempt to find and return from the `nums` array.
 * @returns {number} The found target number. If the number cannot be found, return undefined.
 *
 * EXAMPLE:
 * findTargetNum([1, 2, 3], 2)
 * > 2
 *
 * EXAMPLE:
 * findTargetNum([1, 2, 3], 4)
 * > undefined
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9];
 * findTargetNum(numberArr, 9)
 * > 9
 *
 */
function findTargetNum() {}

/**
 *
 *
 *
 * * isEveryElTheSame()
 *
 * * write a function that takes in an array and determines if every element is the same.
 *
 * * which array method should you use?
 *
 * @param {*[]} arr - An array of kind of data type.
 * @returns {boolean} True if all elements in the array are the same, otherwise false.
 *
 * EXAMPLE:
 * isEveryElTheSame([5, 5, 5, 5, 5, 5, 5, 5])
 * > true
 *
 *
 * EXAMPLE:
 * isEveryElTheSame([1, 2, 3])
 * > false
 *
 * EXAMPLE:
 * isEveryElTheSame(['hello world', 'hello world', 'hello world'])
 * > true
 *
 * EXAMPLE:
 * isEveryElTheSame(['hello', 'world', 'hello world'])
 * > false
 *
 */
function isEveryElTheSame() {}

/**
 *
 *
 *
 * * areSomeEqualToInput()
 *
 * * write a function that takes in an array and a value. determine if any of the elements in the array are equal to the inputted value.
 * * which array method should you use?
 *
 * @param {*[]} arr - An array.
 * @param {*} value - Any value.
 * @returns {boolean} True if any elements in the array match the inputted value.
 *
 * EXAMPLE:
 * areSomeEqualToInput([1, 3, 2, 1, 2, 3], 7)
 * > false
 *
 * EXAMPLE:
 * let numberArr = [3, 5, 8, 4, 9]
 * areSomeEqualToInput(numberArr, 9)
 * > true
 *
 * EXAMPLE:
 * areSomeEqualToInput(['hi', 'hello', 'howdy'], 'howdy')
 * > true
 *
 */
function areSomeEqualToInput() {}

module.exports = {
  plusOne,
  timesTwo,
  filterForOdds,
  filterOddsOrEvens,
  findTargetNum,
  isEveryElTheSame,
  areSomeEqualToInput,
};
