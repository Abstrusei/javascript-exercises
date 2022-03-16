const ftoc = function(num) {
  let result = (num - 32) * 0.5556;
  return Math.round(result * 10)/10;
};

const ctof = function(num) {
  let result =  (num * 1.8) + 32;
  return Math.round(result * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// 1.744 --> 1.7