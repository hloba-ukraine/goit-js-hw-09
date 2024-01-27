import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.email-input'),
  textarea: document.querySelector('.message-input'),
  btn: document.querySelector('.btn-submit'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
savedTextarea();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function savedTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parseMessage = JSON.parse(savedMessage).message;
    refs.textarea.value = parseMessage;
  }
  const savedEmail = localStorage.getItem(STORAGE_KEY);

  if (savedEmail) {
    const parseEmail = JSON.parse(savedEmail).email;
    refs.email.value = parseEmail;
  }
}
