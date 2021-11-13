// 1. Напишите код, который позволит пользователю редактировать масштаб изображения.
// Кроме визуального применения эффекта необходимо записывать значение в скрытое поле
// для дальнейшей отправки на сервер.

// Масштаб:
// 3) При изменении значения поля .scale__control--value изображению внутри .img-upload__preview
// должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.
// Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано
// transform: scale(0.75).

const scaleDown = document.querySelector('.scale__control--smaller');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
// const noneEffect = document.querySelector('.effecs__radio--none');
// const chromeEffect = document.querySelector('.effects__radio--chrome');
// const sepiaEffect = document.querySelector('.effects__radio--sepia');
// const marvinEffect = document.querySelector('.effects__radio--marvin');
// const phobosEffect = document.querySelector('.effects__radio--phobos');
// const heatEffect = document.querySelector('.effects__radio--heat');
// const effectPreviewChrome = document.querySelector('.effects__preview--chrome');


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

// 2. С помощью полученных обновлений (стили и скрипты, необходимые для noUiSlider)
// от Кексобота реализуйте применение эффекта для изображения.
// Кроме визуального применения эффекта необходимо записывать значение в скрытое поле
// для дальнейшей отправки на сервер.

//slider
// const slider = document.querySelector('.effect-level__slider');
// const sliderValue = document.querySelector('.effect-level__value');

// noUiSlider.create(slider, {
//   range: {
//     min: 0,
//     max: 100,
//   },
//   start: 80,
//   step: 1,
//   connect: 'lower',
// });
// // let valueEffect = 80;

// // подписываюсь на событие изменения слайдера - при перемещении слайдера
// slider.noUiSlider.on('update', (_, handle, unencoded) => {
//   //присваиваю значение переменной, которая ровняется положению слайдера
//   // sliderValue.value = unencoded[handle];
//   sliderValue.setAttribute('value', unencoded[handle]);
//   // перевоже в число
//   // valueEffect = Number(sliderValue.value);
//   //вывожу в консоль
//   console.log(sliderValue.value);
// });

// // console.log(valueEffect);


// noneEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   imgPreview.classList.remove('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--phobos');
//   imgPreview.classList.remove('effects__preview--heat');
// });


// chromeEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   chromeEffect.checked;
//   imgPreview.classList.add('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--phobos');
//   imgPreview.classList.remove('effects__preview--heat');

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 0,
//       max: 1,
//     },
//     start: 0.8,
//     step: 0.1,
//   });
//   // const begin = 'grayscale(';
//   // const end = ')';
//   imgPreview.style.filter = `grayscale(${Number(sliderValue.value)})`;
//   // effectPreviewChrome.style.filter = `grayscale${  valueEffect  }%`;
// });
// // imgPreview.style.filter = valueEffect.value;


// sepiaEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   sepiaEffect.checked;
//   imgPreview.classList.add('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--phobos');
//   imgPreview.classList.remove('effects__preview--heat');

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 0,
//       max: 1,
//     },
//     start: 0.8,
//     step: 0.1,
//   });

// });

// marvinEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   marvinEffect.checked;
//   imgPreview.classList.add('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--phobos');
//   imgPreview.classList.remove('effects__preview--heat');

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 0,
//       max: 100,
//     },
//     start: 80,
//     step: 1,
//   });

// });

// phobosEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   phobosEffect.checked;
//   imgPreview.classList.add('effects__preview--phobos');
//   imgPreview.classList.remove('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--heat');

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 0,
//       max: 3,
//     },
//     start: 2,
//     step: 0.1,
//   });
// });

// heatEffect.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   heatEffect.checked;
//   imgPreview.classList.add('effects__preview--heat');
//   imgPreview.classList.remove('effects__preview--chrome');
//   imgPreview.classList.remove('effects__preview--sepia');
//   imgPreview.classList.remove('effects__preview--marvin');
//   imgPreview.classList.remove('effects__preview--phobos');

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 1,
//       max: 3,
//     },
//     start: 80,
//     step: 0.1,
//   });
// });

