import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Отримуємо посилання на елемент <iframe> з відео
const iframe = document.getElementById('vimeo-player');

// Створюємо новий об'єкт плеєра Vimeo
const player = new Player(iframe);

// Отримуємо поточний час відтворення та зберігаємо його у локальне сховище
function saveCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

// Відновлюємо відтворення зі збереженого часу після перезавантаження сторінки
function restorePlayback() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
}

// Відстежуємо подію timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(saveCurrentTime, 1000));

// Викликаємо функцію для відновлення відтворення після перезавантаження сторінки
restorePlayback();
