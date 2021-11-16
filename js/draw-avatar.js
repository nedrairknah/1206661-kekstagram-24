
const drawPicture = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content;
const templateImage = templateFragment.querySelector('a');


const renderSimilarList = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();

  similarPictures.forEach(({url, likes, comments}) => {
    const pictureElement = templateImage.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(pictureElement);
  });

  drawPicture.appendChild(similarListFragment);
};

const clearSimilarList = () => {
  drawPicture.innerHTML = '';
};


export {renderSimilarList, clearSimilarList};
