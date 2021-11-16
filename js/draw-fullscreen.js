const MAX_COMMENTS_COUNT = 5;
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

const showMoreComments = () => {
  const commentsArray = commentsList.querySelectorAll('.social__comment.hidden');
  Array.from(commentsArray).slice(0, MAX_COMMENTS_COUNT).forEach((item) => item.classList.remove('hidden'));
  const commentsAllArray = commentsList.querySelectorAll('.social__comment');
  const commentsOpenedArray = commentsList.querySelectorAll('.social__comment:not(.hidden)');
  const count = commentsOpenedArray.length;
  socialCommentCount.textContent = count;
  if (commentsAllArray.length === count) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
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
  const commentsArray = commentsList.querySelectorAll('.social__comment.hidden');
  Array.from(commentsArray).slice(0, MAX_COMMENTS_COUNT).forEach((item) => item.classList.remove('hidden'));
  description.textContent = data.description;
  socialCommentCount.textContent = data.comments.length < MAX_COMMENTS_COUNT ? data.comments.length : MAX_COMMENTS_COUNT;
  if (data.comments.length <= MAX_COMMENTS_COUNT) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
  commentsLoader.addEventListener('click', showMoreComments);
};

export { renderBigPicture, picturePopup };
