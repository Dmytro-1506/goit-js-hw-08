import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('input');
const inputTextarea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
const dataForm = document.querySelector('form');

let formData = {};
const STORAGE_KEY = "feedback-form-state";
const parseSTORAGE_KEY = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (parseSTORAGE_KEY) {
    if (parseSTORAGE_KEY.email) {
        formData.email = parseSTORAGE_KEY.email;
        inputEmail.value = formData.email;
    };
    if (parseSTORAGE_KEY.message) {
        formData.message = parseSTORAGE_KEY.message;
        inputTextarea.value = formData.message;
    };
}

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
    if (!formData.message || !formData.email) {
        alert('Заповніть всі поля форми')
        return
    }

    console.log(formData);
    dataForm.reset();

    formData.email = '';
    formData.message = '';

    localStorage.removeItem(STORAGE_KEY);
});
