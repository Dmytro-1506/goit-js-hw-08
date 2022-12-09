import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('input');
const inputTextarea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
const dataForm = document.querySelector('form');

let formData = {};
const STORAGE_KEY = "feedback-form-state";

if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    inputEmail.value = formData.email;
    inputTextarea.value = formData.message;
};

inputEmail.addEventListener('input', throttle((e) => {
    formData.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

inputTextarea.addEventListener('input', throttle((e) => {
    formData.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(formData.email);
    console.log(formData.message);

    dataForm.reset();

    localStorage.removeItem(STORAGE_KEY);
});
