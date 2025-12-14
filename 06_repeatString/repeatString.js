const repeatString = function(str, rep) {
  if (rep < 0){
    return "ERROR";
  }
  else if (rep === 0){
    return '';
  }
  else {
    let i = 1;
    let result = str;
    while (i < rep){
      result += str;
      i++;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
