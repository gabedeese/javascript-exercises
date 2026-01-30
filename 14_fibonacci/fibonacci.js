const fibonacci = function(n) {
  n = parseInt(n);

  if (n <= 0) {
    if (n == 0) return 0;
    else return "OOPS";
  }

  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let curr = a + b;
    a = b;
    b = curr;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
