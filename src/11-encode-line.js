/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let counter = 0;
  const str = string.split('');
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    counter++;
    if (counter === 1 && str[i] !== str[i + 1]) {
      result += str[i];
      counter = 0;
    }
    if (counter > 1 && str[i + 1] !== str[i]) {
      result = result + counter + str[i];
      counter = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
