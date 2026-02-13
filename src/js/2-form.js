const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
let formData = {
  email: '',
  message: '',
};

const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
  formData = JSON.parse(saveData);

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

function onFormInput(event) {
  const { name, value } = event.target;

  if (!name) return;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}
