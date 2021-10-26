//импортирую юзеров
import {USERS} from './generate-user';

//нахожу шаблон
const drawPicture = document.querySelector('.picture');

const pictureTemplate = document.querySelector('#picture')
  .content;

// создаю контейнер
const fragment = document.createDocumentFragment();

// передаю массив в переменную
const similarPictures = USERS();

// каждый элемент проходим и передаем в элемент
similarPictures.forEach((user) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = user.url;
  pictureElement.querySelector('.picture__likes').textContent = user.likes;
  pictureElement.querySelector('.picture__comments').textContent = user.comments.length;

  // складываем созданные элементы в "коробочку"
  fragment.appendChild(pictureElement);
});

// отрисовываем
drawPicture.appendChild(fragment);


// Подключите модуль в проект.
export {fragment};


