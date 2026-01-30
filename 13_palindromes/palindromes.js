const palindromes = function (str) {
  let rawAlphaNum = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  let rev = rawAlphaNum
    .split("")
    .reverse()
    .join("");

  return (rawAlphaNum === rev);
};

// Do not edit below this line
module.exports = palindromes;
