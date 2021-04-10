/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s1.split('')
    .concat(s2.split(''))
    .sort();
  let sum = 0;
  for (let i = 0; i < s1.length; i++) {
    arr.shift(arr[i]);
    if (arr[i] === arr[i + 1]) {
      sum++;
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
