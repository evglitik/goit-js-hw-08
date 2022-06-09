import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
};

const STORAGE_FORM = 'feedback-form-state';
const getStorageData = localStorage.getItem(STORAGE_FORM);
const parseForm = JSON.parse(getStorageData);

const formData = { ...parseForm };
setInputStorageData();

refs.email.addEventListener('input', throttle(onInputInStorage, 500));
refs.message.addEventListener('input', throttle(onInputInStorage, 500));
refs.form.addEventListener('submit', onSubmit);

function onInputInStorage(ev) {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(STORAGE_FORM, JSON.stringify(formData));
}

function setInputStorageData() {
  if (getStorageData) {
    const { email, message } = parseForm;

    email === undefined ? (refs.email.value = '') : (refs.email.value = email);

    message === undefined
      ? (refs.message.value = '')
      : (refs.message.value = message);
  }
}

function onSubmit(ev) {
  ev.preventDefault();

  if (!refs.message.value || !refs.email.value) {
    return console.log('Seriously? Why do I need an empty field??? =)');
  }

  console.log(formData);

  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_FORM);
}
