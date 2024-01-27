const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.email-input'),
  textarea: document.querySelector('.message-input'),
  btn: document.querySelector('.btn-submit'),
};
const STORAGE_KEY = 'feedback-form-state';

savedTextarea();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.textarea.value === '' || refs.email.value === '') {
    return alert('Заполните все поля');
  }

  localStorage.removeItem(STORAGE_KEY);
  console.log({
    email: refs.email.value,
    message: refs.textarea.value,
  });
  evt.currentTarget.reset();
}
function onFormInput(evt) {
  const email = refs.email.value;
  const message = refs.textarea.value;
  const formData = {
    email: email,
    message: message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function savedTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parseMessage = JSON.parse(savedMessage).message;
    refs.textarea.value = parseMessage;
  }

  if (savedMessage) {
    const parseEmail = JSON.parse(savedMessage).email;
    refs.email.value = parseEmail;
  }
}
