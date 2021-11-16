const getData = (onSuccess) => {
  fetch ('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((profiles) => {
      onSuccess(profiles);
    });
};

const sendData = (onSuccess, onFail, formData) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
