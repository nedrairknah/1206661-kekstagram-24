
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');


scaleDown.addEventListener('click', (evt) => {
  evt.preventDefault();
  const toNumber = parseInt(scaleValue.value, 10);
  if (toNumber >= 50) {
    scaleValue.value = `${toNumber - 25  }%`;
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
});

scaleUp.addEventListener('click', (evt) => {
  evt.preventDefault();
  const toNumber = parseInt(scaleValue.value, 10);
  if (toNumber <= 75) {
    scaleValue.value = `${toNumber + 25  }%`;
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
});
