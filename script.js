/* =========================================
   🐼💖 OUR LITTLE WORLD — CLEAN script.js
   ========================================= */

/* ============================
   🌸 FLOATING HEARTS
   ============================ */
const heartEmojis = ['💖','💕','💗','💓','🌸','✨','💝','🌺','💞'];

function spawnHeart() {
  const el = document.createElement('span');
  el.classList.add('float-heart');
  el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';

  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';

  document.getElementById('heartsBg').appendChild(el);
  setTimeout(() => el.remove(), (dur + 2) * 1000);
}

setInterval(spawnHeart, 700);

/* ============================
   📄 PAGE NAVIGATION
   ============================ */
function showPage(pageId) {
  document.querySelectorAll('.page.active').forEach(p => {
    p.classList.remove('active');
  });

  const next = document.getElementById(pageId);
  if (next) {
    next.classList.add('active');
    next.scrollTop = 0;
  }
}

/* ============================
   🐼 LOADING
   ============================ */
window.addEventListener('load', () => {
  showPage('loadingPage');
  setTimeout(() => showPage('loginPage'), 2500);
});

/* ============================
   🔐 LOGIN (FIXED)
   ============================ */
function handleLogin() {
  const user = document.getElementById('username').value.trim().toLowerCase();
  const pass = document.getElementById('password').value.trim().toLowerCase();
  const err  = document.getElementById('loginError');

  if (user === 'panda' && pass === 'cute') {
    err.classList.remove('show');

    buildDateCards();   // DIRECT LOAD
    showPage('datePage'); // FIXED

  } else {
    err.classList.add('show');
    setTimeout(() => err.classList.remove('show'), 3000);
  }
}

/* ============================
   📅 DATE CARDS
   ============================ */

const dateMemories = [
  { emoji:'🌸', title:'Day One', para:'Special beginning 💖' },
  { emoji:'🌙', title:'Dreaming Together', para:'Our story started ✨' },
  { emoji:'☕', title:'Morning Texts', para:'Small talks matter 💕' },
  { emoji:'🎵', title:'Our Playlist', para:'Music = You 🎶' },
  { emoji:'🌺', title:'Small Moments', para:'Little things matter 🌸' },
  { emoji:'🌟', title:'You Shine', para:'You are special ✨' },
  { emoji:'🐼', title:'Panda Day', para:'Cute moments 🐼' },
  { emoji:'🍓', title:'Sweet Like You', para:'Sweetest 💖' },
  { emoji:'💌', title:'Love Letter', para:'From heart 💌' },
  { emoji:'🌈', title:'Rainbow Day', para:'Colorful life 🌈' },
  { emoji:'🌙', title:'Midnight Thoughts', para:'Thinking of you 🌙' },
  { emoji:'💫', title:'Almost There', para:'Journey continues 💫' },
  { emoji:'💖', title:'Final Day', para:'Forever 💖' }
];

const startDate = new Date('2026-04-02');
const totalCards = 13;

function buildDateCards() {
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';

  for (let i = 0; i < totalCards; i++) {
    const mem = dateMemories[i];

    const card = document.createElement('div');
    card.className = 'date-card';

    card.innerHTML = `
      <span>${mem.emoji}</span>
      <h3>${mem.title}</h3>
    `;

    card.onclick = () => openMemory(i);

    carousel.appendChild(card);
  }
}

/* ============================
   🌸 MEMORY PAGE
   ============================ */
function openMemory(index) {
  const mem = dateMemories[index];

  document.getElementById('memoryText').innerHTML = mem.para;

  showPage('memoryPage');
}

function goBackToCards() {
  showPage('datePage');
}

/* ============================
   🎵 MUSIC
   ============================ */
let musicPlaying = false;
function enterWorld() {
  buildDateCards();
  showPage('datePage');
}
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');

  if (musicPlaying) {
    audio.pause();
    btn.textContent = '🎵';
  } else {
    audio.play();
    btn.textContent = '🎶';
  }

  musicPlaying = !musicPlaying;
}