module.exports = function getZerosCount(number) {
  zerosCount=0;
      do {
    number = number/ 5>>0;
    zerosCount += number;
    }
     while (number > 1);
  return (zerosCount);
}
