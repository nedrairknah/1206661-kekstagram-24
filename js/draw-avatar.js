import {USERS} from './generate-user';

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы,
// соответствующие фотографиям, и заполните их данными:
// const AVATAR = document.querySelectorAll(.picture)

//   Адрес изображения url подставьте как атрибут src изображения.
// url = src

// Количество лайков likes выведите в блок .picture__likes.
// const .picture__likes = LIKES_AMOUNT

// Количество комментариев comments выведите в блок .picture__comments.
// const .picture__comments = COMMENTS_AMOUNT

// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки э
// лементов используйте DocumentFragment.
// .pictures => .DocumentFragment


const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = USERS();

console.log(similarPictures);

similarPictures.forEach((user) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = user.url;
  pictureElement.querySelector('.picture__likes').textContent = user.likes;
  pictureElement.querySelector('.picture__comments').textContent = user.comments.length;

});


// Подключите модуль в проект.
// export {createPictures};


