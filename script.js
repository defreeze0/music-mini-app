const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); // Раскрыть на весь экран

// Приветствие по имени (если есть)
const user = tg.initDataUnsafe?.user;
const greeting = document.getElementById('greeting');
if (user && user.first_name) {
  greeting.textContent = `Привет, ${user.first_name}!`;
}

// Список треков (для MVP — просто хардкод)
const tracks = [
  {
    title: 'Трек 1',
    artist: 'Исполнитель 1',
    cover: 'https://via.placeholder.com/50',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Замени на любую ссылку
  },
  {
    title: 'Трек 2',
    artist: 'Исполнитель 2',
    cover: 'https://via.placeholder.com/50',
    link: 'https://music.yandex.ru/album/1234567' // Пример ссылки на Яндекс.Музыку
  },
  {
    title: 'Трек 3',
    artist: 'Исполнитель 3',
    cover: 'https://via.placeholder.com/50',
    link: 'https://open.spotify.com/track/123456789' // Пример ссылки на Spotify
  }
];

const list = document.getElementById('tracks-list');

tracks.forEach(track => {
  const card = document.createElement('div');
  card.className = 'track-card';

  card.innerHTML = `
    <img src="${track.cover}" alt="cover" class="cover" />
    <div class="info">
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
    </div>
    <button class="play-btn" onclick="window.open('${track.link}', '_blank')">Слушать</button>
  `;

  list.appendChild(card);
});
