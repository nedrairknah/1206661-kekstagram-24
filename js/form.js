import {isEscapeKey} from './util.js';
import { hashtagValidate, commentValidate, hashtags, commentField, imageLoad, onHashtagsTextInput, commentTextInput } from './form-validation.js';


const formUploadImage = document.querySelector('.img-upload__form');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');


formUploadImage.addEventListener('change', () => {
  openFormPopup();
});

function openFormPopup() {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  hashtagValidate();
  commentValidate();
}

buttonModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormPopup();
});

function closeFormPopup() {
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
  hashtags.removeEventListener('input', onHashtagsTextInput);
  commentField.addEventListener('input', commentTextInput);
  hashtags.value = '';
  commentField.value = '';
}

window.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormPopup();
  }
  window.removeEventListener('keydown', closeFormPopup);
});


export { openFormPopup, closeFormPopup, formUploadImage };
