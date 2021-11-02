const picturePopup = document.querySelector('.big-picture');
const bigPicture = picturePopup.querySelector('.big-picture__img img');
const likesCount = picturePopup.querySelector('.likes-count');
const commentsCount = picturePopup.querySelector('.comments-count');
const commentsList = picturePopup.querySelector('.social__comments');
const description = picturePopup.querySelector('.social__caption');
const socialCommentCount = picturePopup.querySelector('.social__comment-count');
const commentsLoader = picturePopup.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');

const renderComment = (data) => {
  const commentElement = commentTemplate.cloneNode(true);
  const img = commentElement.querySelector('.social__picture');
  img.src = data.avatar;
  img.alt = data.name;
  commentElement.querySelector('.social__text').textContent = data.message;
  return commentElement;
};

const renderBigPicture = (data) => {
  const commentFragment = document.createDocumentFragment();
  bigPicture.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  commentsList.innerHTML = '';
  data.comments.forEach((comment) => {
    commentFragment.appendChild(renderComment(comment));
  });
  commentsList.appendChild(commentFragment);
  description.textContent = data.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export {
  renderBigPicture,
  picturePopup
};
