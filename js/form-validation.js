
// // Есть ли дубли в массиве без учета регистра
// const isUnique = (array) => {
//   let result = false;
//   if (array.length > 1) {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//         if ( !(j === i) && (array[j] === array[i])) {
//           result = true;
//         }
//       }
//     }
//   }
//   return result;
// };

// const isArrayUnique = (array) => {
//   const upperArray = array.map((el) => el.toUpperCase());
//   return isUnique(upperArray);
// };

// // функция валидности хэшей: совпадение, количество, соответствие шаблону
// const hashtagValid = (hashtag) => {
//   const hashValidity = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
//   //перевод строки в массив
//   const hashtags = hashtag.split (' ');

//   let validMessage ='';

//   //Проверка полученных хэштегов
//   if ((hashtags[hashtags.length-1] === '')) {
//     if (isArrayUnique(hashtags)) {
//       validMessage = 'Хэштег уже использован';
//     } else if (hashtags.length > 5) {
//       validMessage = 'Не более пяти Хэштегов';
//     } else {
//       for (let i = 0; i < hashtags.length; i++) {
//         if (hashtags[i] === '#') {
//           validMessage = 'Хэштег не может состоять из одной решетки';
//         } else if (!hashValidity.test(hashtags[i])) {
//           validMessage = 'Введен запретный символ';
//         } else {
//           validMessage = '';
//         }
//       }
//     }
//   }
//   return validMessage;
// };

// const commentValid = (comment) => {
//   let validMessage = '';
//   if (comment.length > 140) {
//     validMessage = 'Не больше 140 символов';
//   }
//   return validMessage;
// };

// export {hashtagValid, commentValid};


// const hashtagField = document.querySelector('.text__hashtags');
// const MAX_HASHTAG_COUNT = 5;

// const hashtagValid = () => {
//   const hashtagKit = hashtagField.value.toLowerCase().trim().split(' ');
//   const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
//   hashtagField.setCustomValidity('');
//   hashtagKit.forEach((hashtag, index, array) => {
//     if (hashtagKit.length > MAX_HASHTAG_COUNT) {
//       hashtagField.setCustomValidity(`Нельзя добавлять более ${MAX_HASHTAG_COUNT} хэш-тегов`);
//       hashtagField.style.borderColor = 'red';
//     } else if (array.includes(hashtag, index + 1)) {
//       hashtagField.setCustomValidity('Xэш-тег не может повторяться');
//     } else if (hashtag.length > 0) {
//       if(!re.test(hashtag)) {
//         hashtagField.setCustomValidity('Xэш-тег начинается с # и состоит из букв и чисел. Максимальная длина одного хэш-тега 20 символов. Хэш-теги разделяются пробелами');
//       }
//     } else {
//       hashtagField.setCustomValidity('');
//     }
//   });
//   hashtagField.reportValidity();
//   if (!hashtagField.checkValidity()) {
//     hashtagField.style.borderColor = 'red';
//   } else {
//     hashtagField.style.borderColor = '';
//   }
// };

const imageLoad = document.querySelector('.img-upload__overlay');

const MAX_HASHTAG_QUANTITY = 5;
const COMMENT_MAX_LENGTH = 140;
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const hashtags = imageLoad.querySelector('.text__hashtags');
const commentField = imageLoad.querySelector('.text__description');

//валидация хештегов

const onHashtagsTextInput = () => {
  hashtags.value = hashtags.value.replaceAll('  ', ' ');

  const hashtagsArr = hashtags.value.split(' ');
  const invalidHashtagsArr = [];

  if (hashtagsArr[0] === '') {
    hashtagsArr.shift();
  }
  if (hashtagsArr[hashtagsArr.length - 1] === '') {
    hashtagsArr.pop();
  }
  hashtagsArr.forEach((hashtag) => {
    if (!hashtag.match(regExp)) {
      invalidHashtagsArr.push(hashtag);
    }
  });

  for (let i = 0; i < hashtagsArr.length; i++) {
    hashtagsArr[i] = hashtagsArr[i].toLowerCase();
  }

  const duplicateHashtagsArr = hashtagsArr.filter((hashtag, index, arr) => arr.indexOf(hashtag) !== index);

  if (duplicateHashtagsArr && duplicateHashtagsArr.length !== 0) {
    hashtags.setCustomValidity(`Пожалуйста, удалите повторяющиеся хэш-теги: ${duplicateHashtagsArr.join(', ')}`);
    hashtags.style.borderColor = '#FF5F49';
  } else if (hashtagsArr.length > MAX_HASHTAG_QUANTITY) {
    hashtags.setCustomValidity(`Нельзя указывать больше ${MAX_HASHTAG_QUANTITY} хэш-тегов. Просьба удалить лишние ${hashtagsArr.length - MAX_HASHTAG_QUANTITY}`);
    hashtags.style.borderColor = '#FF5F49';
  } else if (invalidHashtagsArr.length !== 0) {
    hashtags.setCustomValidity(`Некорректно введен хэш-тег: ${invalidHashtagsArr.join(', ')}`);
    hashtags.style.borderColor = '#FF5F49';
  } else {
    hashtags.setCustomValidity('');
    hashtags.style.borderColor = '';
  }
  hashtags.reportValidity();
};

hashtags.addEventListener('input', onHashtagsTextInput);

//отключает закрытие окна при фокусе в инпуте
hashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

//проверка поля ввода комментария
const commentTextInput = () => {
  const valueLength = commentField.value.length;
  if (valueLength > COMMENT_MAX_LENGTH) {
    commentField.setCustomValidity(`Максимальная длина комментария 140 символов. Удалите лишние ${valueLength - COMMENT_MAX_LENGTH} симв.`);
    commentField.style.borderColor = '#FF5F49';
  } else {
    commentField.setCustomValidity('');
    commentField.style.borderColor = '';
  }
  commentField.reportValidity();
};

commentField.addEventListener('input', commentTextInput);

//отключает закрытие окна при фокусе в инпуте
commentField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const hashtagValidate = () => {
  hashtags.addEventListener('input', onHashtagsTextInput);
};

const commentValidate = () => {
  commentField.addEventListener('input', commentTextInput);
};

export { hashtagValidate, commentValidate, hashtags, commentField, imageLoad, onHashtagsTextInput, commentTextInput };
