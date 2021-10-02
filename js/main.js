const randomInteger = function (from, to) {
  if (from >= 0 && to >= 0) {
    if (to > from) {
      const number = Math.floor(Math.random() * (to - from) + from);
      return number;
    } else {
      return 'значение до меньше или ровно значению от - так нельзя';
    }

  } else {
    return 'отрицательные числа нельзя';
  }
};

randomInteger (3, 33);

const lengthCheck = function (stringToCheck, maxLength) {
  if (stringToCheck <= maxLength) {
    return true;
  } else {
    return false;
  }
};

lengthCheck (100, 500);
