//импортирую юзеров
import {USERS} from './generate-user.js';

//нахожу шаблон
const drawPicture = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content;
const templateImage = templateFragment.querySelector('a');

// передаю массив в переменную
const similarPictures = USERS;

// создаю контейнер
const fragment = document.createDocumentFragment();


// каждый элемент проходим и передаем в элемент
similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = templateImage.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  // складываем созданные элементы в "коробочку"
  fragment.appendChild(pictureElement);
});

// отрисовываем
drawPicture.appendChild(fragment);


// Подключите модуль в проект.
export {drawPicture};


////////////////////
