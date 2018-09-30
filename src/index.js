module.exports = function getZerosCount(number) {
  let zerocount = 0;
  while (number >= 5) {
    number = Math.floor(number / 5);
    zerocount += number;
  }
  return zerocount;
}

