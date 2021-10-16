const getRandomInteger = function (from, to) {
  if (from >= 0 && to >= 0) {
    if (to > from) {
      return Math.floor(Math.random() * (to - from) + from);
    } else {
      return 'значение до меньше или ровно значению от - так нельзя';
    }

  } else {
    return 'отрицательные числа нельзя';
  }
};

getRandomInteger (3, 33);

export {getRandomInteger};
