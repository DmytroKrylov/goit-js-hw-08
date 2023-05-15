import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Отримуємо посилання на елемент <iframe> з відео
const iframe = document.getElementById('vimeo-player');

// Створюємо новий об'єкт плеєра Vimeo
const player = new Player(iframe);

// Отримуємо поточний час відтворення та зберігаємо його у локальне сховище
function saveCurrentTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

// Відновлюємо відтворення зі збереженого часу після перезавантаження сторінки
function restorePlayback() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
}

// Оновлюємо час відтворення зі збереженням у локальному сховищі
const updateCurrentTime = throttle(event => {
  saveCurrentTime(event.seconds);
}, 1000);

// Відстежуємо подію timeupdate - оновлення часу відтворення
player.on('timeupdate', updateCurrentTime);

// Викликаємо функцію для відновлення відтворення після перезавантаження сторінки
restorePlayback();
