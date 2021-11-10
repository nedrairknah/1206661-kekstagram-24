import {isEscapeKey} from './util.js';
import { hashtagValidate, commentValidate, hashtags, commentField, imageLoad, onHashtagsTextInput, commentTextInput } from './form-validation.js';

// // 4. реализовать 'загрузку изображения'
// const uploadForm = document.querySelector('.img-upload__form');
// const uploadFile = document.querySelector('#upload-file');
// const imgUploadOverlay = document.querySelector('.img-upload__overlay');
// const hashInput = document.querySelector('.text__hashtags');
// const commentInput = document.querySelector('.text__description');
// const closeButton = document.querySelector('.img-upload__cancel');

// //Закрытие формы Эскейпом
// const closeForm = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeUploadForm();
//     // imgUploadOverlay.classList.add('hidden');
//   }
// };

// //Функция закрытия окна
// function closeUploadForm () {
//   //сброс значений
//   uploadFile.value = '';
//   hashInput.value = '';
//   commentInput.value = '';

//   imgUploadOverlay.classList.add('hidden');
//   document.querySelector('body').classList.remove('modal-open');
//   document.removeEventListener('keydown', closeForm);

// }

// //Показ окна редактирования нового изображения по добавлению изображния
// uploadFile.addEventListener('change', () => {
//   imgUploadOverlay.classList.remove('hidden');
//   document.querySelector('body').classList.add('modal-open');

//   closeButton.addEventListener('click', closeUploadForm);
//   document.addEventListener('keydown', closeForm);

//   hashInput.addEventListener('focus', () => {
//     //Блокируем закрытие формы по Esc, если поле хэштег в фокусе
//     document.removeEventListener('keydown', closeForm);
//     //Валидация хэштегов
//     hashInput.addEventListener('input', () => {
//       hashInput.setCustomValidity(hashtagValid(hashInput.value));
//       hashInput.reportValidity();
//     });
//   });

//   commentInput.addEventListener('focus', () => {
//     //Блокируем закрытие формы по Esc, если поле коммент в фокусе
//     document.removeEventListener('keydown', closeForm);
//     //Валидация комментария
//     commentInput.addEventListener('input', () => {
//       commentInput.setCustomValidity(commentValid(commentInput.value));
//       commentInput.reportValidity();
//     });
//   });
//   //Возвращаем возможность закрыть форму по Esc
//   hashInput.addEventListener('blur', () => {
//     document.addEventListener('keydown', closeForm);
//   });
//   commentInput.addEventListener('blur', () => {
//     document.addEventListener('keydown', closeForm);
//   });
// });

// uploadForm.addEventListener('submit', (evt) => {
//   if (!(commentValid(commentInput.value) === '')) {
//     evt.preventDefault();
//     commentInput.setCustomValidity(commentValid(commentInput.value));
//     commentInput.reportValidity();
//   }
//   if (!(commentValid(commentInput.value) === '')) {
//     evt.preventDefault();
//     commentInput.setCustomValidity(commentValid(commentInput.value));
//     commentInput.reportValidity();
//   }
// });


// 7. Реализуйте логику проверки так, чтобы как минимум, она срабатывала при попытке отправить форму
const formUploadImage = document.querySelector('.img-upload__form');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');


//слушатель изменения значения кнопкок scale
// const scaleChange = () => {
//   scaleControlSmallerButton.addEventListener('click', onScaleSmallerClick);
//   scaleControlBiggerButton.addEventListener('click', onScaleBiggerClick);
// };

//слушатель изменения значения поля #upload-file)
formUploadImage.addEventListener('change', () => {
  openFormPopup();
});

//функция открытия модального окна
function openFormPopup() {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  // scaleChange();
  hashtagValidate();
  commentValidate();
}

//закрытие модального окна кнопкой
buttonModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormPopup();
});

//функция закрытия модального окна
function closeFormPopup() {
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
  //обработчики событий
  // scaleControlSmallerButton.removeEventListener('click', onScaleSmallerClick);
  // scaleControlBiggerButton.removeEventListener('click', onScaleBiggerClick);
  hashtags.removeEventListener('input', onHashtagsTextInput);
  commentField.addEventListener('input', commentTextInput);
  //Очистка полей
  // fileChooser.value = '';
  // scaleValueHidden.value = '100';
  // scaleControlValue.value = '100%';
  // imgUploadPreview.style.transform = 'scale(1)';
  //фильтры
  // sliderElementBlock.style.display = 'none';
  // sliderElement.style.display = 'none';
  // effectLevelValue.value = '';
  // imgUploadPreview.style.filter = 'none';
  // вводимый текст
  hashtags.value = '';
  commentField.value = '';
}

//закрытие модального окна по 'esc'
window.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormPopup();
  }
  window.removeEventListener('keydown', closeFormPopup);
});

//нажатие на кнопку публикации
// const setImgUploadFormSubmit = (onSuccess) => {
//   formUploadImage.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     // sendData(
//     //   () => showSuccessMessage('Форма успешно отправлена'),
//     //   () => showErrorMessage('При отправке формы возникла ошибка'),
//       () => onSuccess(),
//       new FormData(evt.target),
//     );
//   });
// };

// setImgUploadFormSubmit(closeFormPopup);

export { formUploadImage, imageLoad /*imgUploadPreview*/ };
