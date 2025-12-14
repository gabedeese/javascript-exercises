const reverseString = function(str) {
  let result = '';
  while (str.length > 0) {
    result += str.slice(-1);
    str = str.slice(0, -1);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
