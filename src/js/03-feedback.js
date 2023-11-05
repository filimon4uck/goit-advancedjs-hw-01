import { throttle } from 'lodash';
const formEl = document.querySelector('.feedback-form');
const KEY_FORM_VALUES = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(KEY_FORM_VALUES)) ?? {};

formEl.email.value = formData.email || '';
formEl.message.value = formData.message || '';

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  if (evt.currentTarget.email.value && evt.currentTarget.message.value) {
    localStorage.clear();
    console.log(formData);
    evt.currentTarget.reset();
    formData = {};
  } else {
    alert('Please fill all fields');
  }
});

formEl.addEventListener('input', throttle(inputHandler, 500));
function inputHandler({ target } = evt) {
  formData[target.name] = target.value;
  localStorage.setItem(KEY_FORM_VALUES, JSON.stringify(formData));
}
