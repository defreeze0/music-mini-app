```js
const tg = window.Telegram.WebApp;
tg.ready();

// Данные треков (хранятся прямо в коде — без бэкенда)
const tracks = [
  {
    id: 1,
    title: 'Трек 1',
    artist: 'Исполнитель 1',
    cover: 'cover',
    audioUrl: '/audio/track1.mp3'
  },
  {
    id: 2,
    title: 'Newstar',
    artist: 'Unknown',
    cover: 'cover',
    audioUrl: '/audio/newstar.mp3'
  },
  {
    id: 3,
    title: 'Slikk',
    artist: 'Unknown',
    cover: 'cover',
    audioUrl: '/audio/slikk.mp3'
  }
];

// Персонализация приветствия (если есть данные пользователя)
const user = tg.initDataUnsafe?.user;
const greetingEl = document.getElementById('greeting');
if (user) {
  greetingEl.textContent = `Привет, \${user.first_name}!`;
}

// Генерация карточек треков
const tracksList = document.getElementById('tracks-list');

tracks.forEach(track => {
  const card = document.createElement('div');
  card.className = 'track-card';

  card.innerHTML = `
    <div class="track-cover">\${track.cover}</div>
    <div class="track-info">
      <div class="track-title">\${track.title}</div>
      <div class="track-artist">\${track.artist}</div>
    </div>
    <button class="play-btn" onclick="playTrack('\${track.audioUrl}')">Слушать</button>
  `;

  tracksList.appendChild(card);
});

// Функция воспроизведения
function playTrack(url) {
  tg.openLink(url); // открывает аудио в нативном плеере Telegram
}
```
