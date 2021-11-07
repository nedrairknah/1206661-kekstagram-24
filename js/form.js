import {isEscapeKey} from './util.js';
import {hashtagValid, commentValid} from './form-validation.js';

// 4. реализовать 'загрузку изображения'
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const hashInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const closeButton = document.querySelector('.img-upload__cancel');

//Закрытие формы Эскейпом
const closeForm = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
    // imgUploadOverlay.classList.add('hidden');
  }
};

//Функция закрытия окна
function closeUploadForm () {
  //сброс значений
  uploadFile.value = '';
  hashInput.value = '';
  commentInput.value = '';

  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', closeForm);

}

//Показ окна редактирования нового изображения по добавлению изображния
uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  closeButton.addEventListener('click', closeUploadForm);
  document.addEventListener('keydown', closeForm);

  hashInput.addEventListener('focus', () => {
    //Блокируем закрытие формы по Esc, если поле хэштег в фокусе
    document.removeEventListener('keydown', closeForm);
    //Валидация хэштегов
    hashInput.addEventListener('input', () => {
      hashInput.setCustomValidity(hashtagValid(hashInput.value));
      hashInput.reportValidity();
    });
  });

  commentInput.addEventListener('focus', () => {
    //Блокируем закрытие формы по Esc, если поле коммент в фокусе
    document.removeEventListener('keydown', closeForm);
    //Валидация комментария
    commentInput.addEventListener('input', () => {
      commentInput.setCustomValidity(commentValid(commentInput.value));
      commentInput.reportValidity();
    });
  });
  //Возвращаем возможность закрыть форму по Esc
  hashInput.addEventListener('blur', () => {
    document.addEventListener('keydown', closeForm);
  });
  commentInput.addEventListener('blur', () => {
    document.addEventListener('keydown', closeForm);
  });
});

uploadForm.addEventListener('submit', (evt) => {
  if (!(commentValid(commentInput.value) === '')) {
    evt.preventDefault();
    commentInput.setCustomValidity(commentValid(commentInput.value));
    commentInput.reportValidity();
  }
  if (!(commentValid(commentInput.value) === '')) {
    evt.preventDefault();
    commentInput.setCustomValidity(commentValid(commentInput.value));
    commentInput.reportValidity();
  }
});


// 7. Реализуйте логику проверки так, чтобы как минимум, она срабатывала при попытке отправить форму
