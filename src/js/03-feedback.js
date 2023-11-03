import { throttle } from 'lodash';
const formEl = document.querySelector('.feedback-form');
const KEY_FORM_VALUES = 'feedback-form-state';

let formDataFromLS = JSON.parse(localStorage.getItem(KEY_FORM_VALUES)) ?? {};
formEl.email.value = formDataFromLS.email ?? '';
formEl.message.value = formDataFromLS.message ?? '';

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.clear();
  console.log(formDataFromLS);
  evt.currentTarget.reset();
  formDataFromLS = {};
});

formEl.addEventListener('input', throttle(inputHandler, 500));
function inputHandler({ target } = evt) {
  const formData = JSON.parse(localStorage.getItem(KEY_FORM_VALUES)) ?? {};
  formData[target.name] = target.value;
  localStorage.setItem(KEY_FORM_VALUES, JSON.stringify(formData));
}
