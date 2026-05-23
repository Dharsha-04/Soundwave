// ── DATA: Free/Public Domain audio from various free sources ──
const tracks = [
  {
    id: 1,
    title: "Jingle Bells",
    artist: "Traditional",
    album: "Holiday Classics",
    genre: "pop",
    emoji: "🎄",
    bg: "linear-gradient(135deg,#1a472a,#2d6a4f)",
    duration: "1:15",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Upbeat Pop",
    artist: "SoundHelix",
    album: "Beats Collection",
    genre: "pop",
    emoji: "🎸",
    bg: "linear-gradient(135deg,#6a1a6a,#2d006e)",
    duration: "3:48",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Smooth Jazz Vibes",
    artist: "Studio Band",
    album: "Jazz Lounge",
    genre: "jazz",
    emoji: "🎷",
    bg: "linear-gradient(135deg,#1a2a3a,#2a4a6a)",
    duration: "4:12",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "Electronic Dreams",
    artist: "SynthWave",
    album: "Neon Nights",
    genre: "electronic",
    emoji: "🎹",
    bg: "linear-gradient(135deg,#0a0a2e,#1a1a6e)",
    duration: "3:30",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    title: "Midnight Groove",
    artist: "Groove Masters",
    album: "Late Nights",
    genre: "jazz",
    emoji: "🥁",
    bg: "linear-gradient(135deg,#2a0a0a,#6e1a1a)",
    duration: "3:55",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    title: "Ambient Space",
    artist: "The Cosmos",
    album: "Outer Worlds",
    genre: "ambient",
    emoji: "🌌",
    bg: "linear-gradient(135deg,#0a1a2e,#1a0a3a)",
    duration: "5:22",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: 7,
    title: "Dance Floor Hit",
    artist: "Club Vibes",
    album: "Party Anthems",
    genre: "electronic",
    emoji: "🕺",
    bg: "linear-gradient(135deg,#1a3a1a,#2a6e2a)",
    duration: "4:05",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: 8,
    title: "Classical Morning",
    artist: "Symphony No. 1",
    album: "Morning Serenade",
    genre: "classical",
    emoji: "🎻",
    bg: "linear-gradient(135deg,#3a2a1a,#6e4e2a)",
    duration: "6:40",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    id: 9,
    title: "Soul Searching",
    artist: "Deep Soul",
    album: "Feelings",
    genre: "pop",
    emoji: "🎤",
    bg: "linear-gradient(135deg,#2a1a3a,#4a2a6a)",
    duration: "3:28",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id: 10,
    title: "Chill Out Session",
    artist: "Lounge DJ",
    album: "Chill Mix",
    genre: "ambient",
    emoji: "🌊",
    bg: "linear-gradient(135deg,#0a2a3a,#1a4a6a)",
    duration: "4:50",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    id: 11,
    title: "Rock Instrumental",
    artist: "Power Chords",
    album: "Guitar Gods",
    genre: "pop",
    emoji: "🎸",
    bg: "linear-gradient(135deg,#3a0a0a,#6e0a0a)",
    duration: "3:15",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    id: 12,
    title: "Piano Nocturne",
    artist: "Key Master",
    album: "Solo Piano",
    genre: "classical",
    emoji: "🎹",
    bg: "linear-gradient(135deg,#1a1a1a,#3a3a3a)",
    duration: "5:08",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  }
];

const playlists = [
  { name: "Liked Songs", emoji: "💚", count: 0, color: "#6c6cff", genre: "all" },
  { name: "Chill Vibes", emoji: "🌊", count: 4, color: "#1db954", genre: "ambient" },
  { name: "Night Drive", emoji: "🌃", count: 6, color: "#e040fb", genre: "electronic" },
  { name: "Morning Jazz", emoji: "☕", count: 5, color: "#ff9800", genre: "jazz" },
  { name: "Classics", emoji: "🎻", count: 3, color: "#f44336", genre: "classical" }
];

const artists = [
  { name: "SoundHelix", emoji: "🎸", genre: "pop", bg: "linear-gradient(135deg,#6a1a6a,#2d006e)" },
  { name: "SynthWave", emoji: "🎹", genre: "electronic", bg: "linear-gradient(135deg,#0a0a2e,#1a1a6e)" },
  { name: "Deep Soul", emoji: "🎤", genre: "pop", bg: "linear-gradient(135deg,#2a1a3a,#4a2a6a)" },
  { name: "The Cosmos", emoji: "🌌", genre: "ambient", bg: "linear-gradient(135deg,#0a1a2e,#1a0a3a)" },
  { name: "Studio Band", emoji: "🎷", genre: "jazz", bg: "linear-gradient(135deg,#1a2a3a,#2a4a6a)" },
  { name: "Key Master", emoji: "🎼", genre: "classical", bg: "linear-gradient(135deg,#1a1a1a,#3a3a3a)" }
];

// ── STATE ──
let currentIdx = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let liked = new Set();
let currentGenre = 'all';
let filteredTracks = [...tracks];
const audio = document.getElementById('audioEl');
audio.volume = 0.8;

// ── INIT ──
function init() {
  renderPlaylists();
  renderArtistCards();
  renderTrackList();
}

function renderPlaylists() {
  const el = document.getElementById('playlistList');
  el.innerHTML = playlists.map((p, i) => `
    <div class="playlist-item" onclick="selectPlaylist(${i})" data-id="${i}">
      <div class="playlist-thumb" style="background:${p.color}20;color:${p.color}">${p.emoji}</div>
      <div class="playlist-info">
        <p>${p.name}</p>
        <span>Playlist • ${p.name === 'Liked Songs' ? liked.size : p.count} songs</span>
      </div>
    </div>
  `).join('');
}

function renderArtistCards() {
  const el = document.getElementById('artistCards');
  const list = currentGenre === 'all' ? artists : artists.filter(a => a.genre === currentGenre);
  el.innerHTML = list.map((a, i) => `
    <div class="music-card" onclick="playArtist('${a.genre}')">
      <div class="card-art" style="background:${a.bg}">
        <span style="font-size:52px">${a.emoji}</span>
        <div class="play-overlay">
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="card-title">${a.name}</div>
      <div class="card-sub">${capitalize(a.genre)}</div>
    </div>
  `).join('');
}

function renderTrackList(filter = '') {
  const el = document.getElementById('trackList');
  const toShow = filter
    ? filteredTracks.filter(t => t.title.toLowerCase().includes(filter.toLowerCase()) || t.artist.toLowerCase().includes(filter.toLowerCase()))
    : filteredTracks;

  if (toShow.length === 0) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-gray)">No tracks found</div>';
    return;
  }

  el.innerHTML = toShow.map((t, i) => `
    <div class="track-row ${currentIdx !== -1 && tracks[currentIdx]?.id === t.id ? 'playing' : ''}" id="row-${t.id}" onclick="playTrack(${tracks.indexOf(t)})">
      <div class="track-num">${i + 1}</div>
      <div class="track-play-icon">
        ${currentIdx !== -1 && tracks[currentIdx]?.id === t.id && isPlaying
          ? `<div class="eq-bars"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`
          : `<svg width="16" height="16" viewBox="0 0 24 24" fill="var(--text-white)"><path d="M8 5v14l11-7z"/></svg>`
        }
      </div>
      <div class="track-art" style="background:${t.bg}">${t.emoji}</div>
      <div>
        <div class="track-name">${t.title}</div>
        <div class="track-artist">${t.artist}</div>
      </div>
      <div class="track-album">${t.album}</div>
      <button class="heart-btn ${liked.has(t.id) ? 'liked' : ''}" onclick="event.stopPropagation();toggleLikeTrack(${t.id})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="${liked.has(t.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="track-duration">${t.duration}</div>
    </div>
  `).join('');
}

// ── PLAYBACK ──
function playTrack(idx) {
  if (idx < 0 || idx >= tracks.length) return;
  currentIdx = idx;
  const t = tracks[idx];
  audio.src = t.url;
  audio.play().catch(() => showToast("⚠️ Could not load audio. Check connection."));
  isPlaying = true;
  updateNowPlaying(t);
  updatePlayBtn();
  renderTrackList();
  document.getElementById('nowArt').classList.add('playing');
}

function updateNowPlaying(t) {
  document.getElementById('nowArt').textContent = t.emoji;
  document.getElementById('nowArt').style.background = t.bg;
  document.getElementById('nowArt').style.padding = '8px';
  document.getElementById('nowArt').style.borderRadius = '4px';
  document.getElementById('nowTitle').textContent = t.title;
  document.getElementById('nowArtist').textContent = t.artist;
  document.getElementById('featuredArt').textContent = t.emoji;
  document.getElementById('featuredTitle').textContent = t.title;
  document.getElementById('featuredDesc').textContent = `${t.artist} • ${t.album}`;
  document.getElementById('featuredBanner').style.background = t.bg;
  document.getElementById('likeBtn').classList.toggle('liked', liked.has(t.id));
}

function togglePlay() {
  if (currentIdx === -1) { playTrack(0); return; }
  if (isPlaying) { audio.pause(); isPlaying = false; document.getElementById('nowArt').classList.remove('playing'); }
  else { audio.play(); isPlaying = true; document.getElementById('nowArt').classList.add('playing'); }
  updatePlayBtn();
  renderTrackList();
}

function updatePlayBtn() {
  document.getElementById('playIcon').style.display = isPlaying ? 'none' : 'block';
  document.getElementById('pauseIcon').style.display = isPlaying ? 'block' : 'none';
}

function nextTrack() {
  let next;
  if (isShuffle) {
    do { next = Math.floor(Math.random() * tracks.length); } while (next === currentIdx && tracks.length > 1);
  } else {
    next = (currentIdx + 1) % tracks.length;
  }
  playTrack(next);
}

function prevTrack() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const prev = (currentIdx - 1 + tracks.length) % tracks.length;
  playTrack(prev);
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('active', isShuffle);
  showToast(isShuffle ? '🔀 Shuffle on' : '🔀 Shuffle off');
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  audio.loop = isRepeat;
  document.getElementById('repeatBtn').classList.toggle('active', isRepeat);
  showToast(isRepeat ? '🔁 Repeat on' : '🔁 Repeat off');
}

// ── SEEK ──
function seekTo(e) {
  const bar = document.getElementById('progressTrack');
  const ratio = e.offsetX / bar.offsetWidth;
  audio.currentTime = ratio * audio.duration;
}

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('curTime').textContent = fmt(audio.currentTime);
  document.getElementById('durTime').textContent = fmt(audio.duration);
});

audio.addEventListener('ended', () => {
  if (!isRepeat) nextTrack();
});

function fmt(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${ss}`;
}

// ── VOLUME ──
function setVolume(v) {
  audio.volume = v / 100;
  isMuted = false;
}

function toggleMute() {
  isMuted = !isMuted;
  audio.muted = isMuted;
  showToast(isMuted ? '🔇 Muted' : '🔊 Unmuted');
}

// ── LIKE ──
function toggleLike() {
  if (currentIdx === -1) return;
  toggleLikeTrack(tracks[currentIdx].id);
}

function toggleLikeTrack(id) {
  if (liked.has(id)) { liked.delete(id); showToast('💔 Removed from Liked'); }
  else { liked.add(id); showToast('💚 Added to Liked Songs'); }
  if (currentIdx !== -1) {
    document.getElementById('likeBtn').classList.toggle('liked', liked.has(tracks[currentIdx].id));
  }
  renderTrackList();
  renderPlaylists();
}

// ── FILTER ──
function filterGenre(genre, el) {
  currentGenre = genre;
  document.querySelectorAll('.genre-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filteredTracks = genre === 'all' ? [...tracks] : tracks.filter(t => t.genre === genre);
  renderArtistCards();
  renderTrackList();
}

function filterTracks(q) {
  renderTrackList(q);
}

function selectPlaylist(i) {
  document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-id="${i}"]`).classList.add('active');
  const p = playlists[i];
  if (p.name === 'Liked Songs') {
    filteredTracks = tracks.filter(t => liked.has(t.id));
  } else {
    filteredTracks = p.genre === 'all' ? [...tracks] : tracks.filter(t => t.genre === p.genre);
  }
  renderTrackList();
  showToast(`📂 ${p.name}`);
}

function playArtist(genre) {
  const artistTracks = tracks.filter(t => t.genre === genre);
  if (artistTracks.length > 0) {
    playTrack(tracks.indexOf(artistTracks[0]));
  }
}

// ── TOAST ──
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

init();
