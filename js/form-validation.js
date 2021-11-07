
//Есть ли дубли в массиве без учета регистра
const isUnique = (array) => {
  let result = false;
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if ( !(j === i) && (array[j] === array[i])) {
          result = true;
        }
      }
    }
  }
  return result;
};

const isArrayUnique = (array) => {
  const upperArray = array.map((el) => el.toUpperCase());
  return isUnique(upperArray);
};

const hashtagValid = (hashtag) => {
  const hashValidity = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  const hashtags = hashtag.split (' ');

  let validMessage = '';

  //Проверка полученных хэштегов
  if (hashtags[hashtags.length-1] === '') {
    if (isArrayUnique(hashtags)) {
      validMessage = 'Хэштег уже использован';
    } else if (hashtags.length > 5) {
      validMessage = 'Не более пяти Хэштегов';
    } else {
      for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i] === '#') {
          validMessage = 'Хэштег не может состоять из одной решетки';
        } else if (!hashValidity.test(hashtags[i])) {
          validMessage = 'Введен запретный символ';
        } else {
          validMessage = ' ';
        }
      }
    }
  }
  return validMessage;
};

const commentValid = (comment) => {
  let validMessage = '';
  if (comment.length > 140) {
    validMessage = 'Не больше 140 символов';
  }
  return validMessage;
};

export {hashtagValid, commentValid};
