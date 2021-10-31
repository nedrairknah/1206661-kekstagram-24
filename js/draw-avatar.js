import {USERS} from './generate-user.js';

const drawPicture = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content;
const templateImage = templateFragment.querySelector('a');

const similarPictures = USERS;

const fragment = document.createDocumentFragment();


similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = templateImage.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  fragment.appendChild(pictureElement);
});

drawPicture.appendChild(fragment);


export {drawPicture};
