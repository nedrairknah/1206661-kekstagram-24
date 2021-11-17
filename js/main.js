// import './generate-user.js';
import {renderSimilarList} from'./draw-avatar.js';
import './draw-fullscreen.js';
// import './form.js';
import { closeFormPopup } from './form.js';
import { setUserFormSubmit } from './form-validation.js';
import './scale.js';
import './slider.js';
import { getData} from './api.js';
import './filters.js';

getData((profiles) => {
  renderSimilarList(profiles);
});

setUserFormSubmit(closeFormPopup);
