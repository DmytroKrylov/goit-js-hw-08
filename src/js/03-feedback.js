// import throttle from 'lodash.throttle'; - (чомусь при такому імпотрі не працює)

// Отримую посилання на форму та її елементи
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функція, яка зберігає стан форми в локальне сховище
const saveFormState = _.throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

// Функція, яка завантажує збережений стан форми з локального сховища
const loadFormState = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// Виклик функцій для завантаження збереженого стану форми при завантаженні сторінки
window.addEventListener('load', loadFormState);

// Відстежування події input для полів форми
emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

// Отримання події submit форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Очищення полів форми
  emailInput.value = '';
  messageInput.value = '';

  // Очищення локального сховища
  localStorage.removeItem('feedback-form-state');

  // Виведення даних у консоль
  const formState = {
    email: '',
    message: '',
  };
  console.log('Form submitted:', formState);
});
