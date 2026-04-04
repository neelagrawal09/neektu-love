/* =========================================
   🐼💖 OUR LITTLE WORLD — script.js
   ========================================= */

/* ============================
   🌸 FLOATING HEARTS SETUP
   ============================ */
const heartEmojis = ['💖', '💕', '💗', '💓', '🌸', '✨', '💝', '🌺', '💞'];

function spawnHeart() {
  const el = document.createElement('span');
  el.classList.add('float-heart');
  el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('heartsBg').appendChild(el);
  setTimeout(() => el.remove(), (dur + 2) * 1000);
}

setInterval(spawnHeart, 700);
for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 300);


/* ============================
   📄 PAGE NAVIGATION
   ============================ */
function showPage(pageId) {
  // Fade out all active pages
  document.querySelectorAll('.page.active').forEach(p => {
    p.classList.add('fade-out');
    setTimeout(() => {
      p.classList.remove('active', 'fade-out');
    }, 600);
  });

  // Fade in new page after short delay
  setTimeout(() => {
    const next = document.getElementById(pageId);
    if (next) {
      next.classList.add('active');
      next.scrollTop = 0;
    }
  }, 350);
}


/* ============================
   🐼 LOADING SCREEN
   ============================ */
window.addEventListener('load', () => {
  showPage('loadingPage');
  setTimeout(() => showPage('loginPage'), 2600);
});


/* ============================
   🔐 LOGIN
   ============================ */
function handleLogin() {
  const user = document.getElementById('username').value.trim().toLowerCase();
  const pass = document.getElementById('password').value.trim().toLowerCase();
  const err  = document.getElementById('loginError');

  if (user === 'panda' && pass === 'cute') {
    err.classList.remove('show');
    buildQuestions();
    showPage('questionsPage');
  } else {
    err.classList.add('show');
    const user = document.getElementById('username').value.trim();
const pass = document.getElementById('password').value.trim();
    setTimeout(() => err.classList.remove('show'), 3000);
  }
}

// Enter key support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const active = document.querySelector('.page.active');
    if (!active) return;
    if (active.id === 'loginPage')    handleLogin();
    if (active.id === 'puzzlePage')   handlePuzzle();
  }
});


/* ============================
   🧩 PUZZLE PAGE
   ============================ */
function handlePuzzle() {
  const ans = document.getElementById('puzzleAnswer').value.trim().toLowerCase();
  const err = document.getElementById('puzzleError');

  if (ans === 'neektu') {
    err.classList.remove('show');
    buildQuestions();
    showPage('questionsPage');
  } else {
    err.classList.add('show');
    document.getElementById('puzzleAnswer').value = '';
    setTimeout(() => err.classList.remove('show'), 3000);
  }
}


/* ============================
   💌 QUESTIONS PAGE
   ============================ */
const questions = [
  {
    label: "💭🐼 What are three things I say a lot? ✨",
    type: "input",
    placeholder: "Think carefully... what do I repeat often? 😏"
  },
  {
    label: "📱💞 What's something about me you just can't figure out? 🤔",
    type: "input",
    placeholder: "Be honest... I'm curious 👀💕"
  },
  {
    label: "🚗💬 What's a compliment I've given you that you can't stop thinking about? 🥺💖",
    type: "input",
    placeholder: "That one line you still remember... 💭✨"
  },
  {
    label: "❤️🌸 What's one thing you wish we could do more often together? 🥰",
    type: "input",
    placeholder: "Something you want more of... 💕"
  },
  {
    label: "😳💫 What's one thing you still feel shy doing around me? 🥺",
    type: "input",
    placeholder: "Don't be shy now... tell me 💖👀"
  }
];

function buildQuestions() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';

  questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'question-item anim-in';
    item.style.animationDelay = (i * 0.08) + 's';

    const label = document.createElement('span');
    label.className = 'question-label';
    label.textContent = q.label;
    item.appendChild(label);

    if (q.type === 'options') {
      const opts = document.createElement('div');
      opts.className = 'question-options';
      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'q-btn';
        btn.textContent = opt;
        btn.onclick = () => {
          opts.querySelectorAll('.q-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        };
        opts.appendChild(btn);
      });
      item.appendChild(opts);
    } else {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'question-input';
      inp.placeholder = q.placeholder;
      item.appendChild(inp);
    }

    container.appendChild(item);
  });
}


/* ============================
   💖 LOVE POPUP + TRANSITION
   ============================ */
function handleContinue() {
  showLovePopup();
}

function showLovePopup() {
  const popup = document.getElementById('lovePopup');
  popup.classList.add('show');
  spawnPopupHearts();
  spawnSparkles();

  // Auto-advance after 5.5 seconds (enough for all rhyme lines to appear)
  setTimeout(() => {
    popup.classList.remove('show');
    buildDateCards();
    showPage('datePage');
  }, 5500);
}

function spawnPopupHearts() {
  const container = document.getElementById('popupHearts');
  container.innerHTML = '';
  const emojis = ['💖', '💕', '💗', '💓', '💞', '🌸', '✨', '💝', '🌺'];
  for (let i = 0; i < 30; i++) {
    const h = document.createElement('span');
    h.className = 'popup-heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.bottom = '-10px';
    h.style.fontSize = (1.2 + Math.random() * 2) + 'rem';
    const dur = 2 + Math.random() * 3;
    h.style.animationDuration = dur + 's';
    h.style.animationDelay = Math.random() * 2.5 + 's';
    container.appendChild(h);
  }
}

function spawnSparkles() {
  const container = document.getElementById('sparkles');
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top  = Math.random() * 100 + 'vh';
    s.style.animationDelay = Math.random() * 1 + 's';
    s.style.animationDuration = (0.6 + Math.random() * 0.8) + 's';
    s.style.width = s.style.height = (4 + Math.random() * 8) + 'px';
    container.appendChild(s);
  }
}


/* ============================
   📅 DATE CARDS
   ============================ */
// Memories for each date (2 Apr – 14 Apr 2026)
const dateMemories = [
  {
    emoji: '🌸',
    title: 'Day One',
   para: `From today, we relive all the beautiful moments we’ve shared… 💖  
Let’s walk through our journey once again and feel every memory.

And today, let’s talk about this little cute baby…  
My Bhaktu 🐼, my gollu 💕

A cute, dramatic, innocent, and sometimes silent soul…  
A little bachha who is hustling every day to make her future bright ✨  

I found this girl on Snapchat, just like a free ticket…  
But I never imagined that this “free ticket” would become my whole world.  

My smile giver, my stress reliever, my everything 💖  

From just a simple message…  
To becoming besties…  
To becoming so close that now this bond feels beyond everything 💞  

I am so proud of my girl for everything she is and everything she’s becoming 🥺💖  

She is truly the kind of girl every boy dreams of…  
So special… so rare… so perfect 💫  

Happy Birthday to my special child 🎂💕  
Stay happy, keep smiling always 😊  

And yes…  
Ronduuuuuuuuuuu 😄💖`,
  },
 {
  emoji: '🌙',
  title: 'Dreaming Together',
  para: `💖🌸 Let’s start our journey from the very first moment we talked… 😊💕 <br><br>

It was during our online lecture — sachdev ma’am’s English class 📚✨ <br>
And in that lecture, I randomly messaged Bhakti… 💬🥺 <br><br>

I don’t even know why, but I just felt like texting her because she looked so cute 🥹💖 <br>
Her smile… her eyes… everything felt so special to me ✨💞 <br><br>

So my first message was simply — “Hi” 😊 <br>
And she replied — “Hi” 💕 <br><br>

Then I said, “We’re talking for the first time…” <br>
She said, “Yeah” 😄 <br><br>

And from that small “hi”… <br>
We just kept talking… chatting… texting all day and night 🌙💬💕 <br><br>

💞✨ Then came the day we met for the first time offline… <br><br>

At our school ground near the water tank 🌿💫 <br>
She was there with her friend Parineeti 👭 <br>
And I was there with my friend Kuber 👬 <br><br>

I had bought a small chocolate for her 🍫🥺 (KitKat 💖) <br><br>

We were both walking around… <br>
I could see her… she could see me… 👀💓 <br><br>

She knew I wanted to talk to her… <br>
But she was teasing me 😄💞 <br><br>

After 15–20 minutes… I gathered courage 💪❤️ <br>
I went to her… talked… and we had such a sweet moment 🥺💖 <br><br>

Then I gave her that chocolate 🍫💕 <br>
That day was just perfect 💞🌸 <br><br>

💖✨ And from that day… our journey truly began… <br><br>

We kept talking… texting all night… <br>
Becoming closer day by day 🥰💫 <br><br>

From a random “Hi”… to my whole world 💞🌍 <br>
You became my happiness… my peace… my home 🏡💖 <br><br>

📸💖 This photo is from our first phase… Diwali 🎆✨ <br>
Your first photo… my favorite memory 🥺💞 <br><br>

💖🌸 This is our beginning… <br>
The most beautiful part of my life ✨ <br><br>

👉 My Bhakti… my panda 🐼💕 <br><br>

💞✨ Thank you for being in my life… 🥺🌍💖`
},
  {
    emoji: '☕',
    title: 'Morning Texts',
para: `💖🌸 It all started back in school when I thought I could manage everything — my relationship with Gauri and my bond with Bhakti 💭. I believed it wouldn’t affect anything, but slowly things changed. Without realizing it, I started giving more attention to my girlfriend, and Bhakti began feeling ignored, even though she never deserved that 🥺💔  

One day, we were at Jaishankar panipuri 🥙. I was busy talking to my girlfriend about random things, while Bhakti was sitting nearby with Riya, quietly having bhelpuri. I didn’t even notice her properly or talk to her… and that hurt her more than I understood at that time 😞  

Later, when my mom scolded me on call 📞 and Bhakti supported her, she got upset, walked away, and sat alone.  

The next day, I came to know she had cried 😢. That moment hit me hard. During our prelim exams 📚, I tried to talk to her and apologize, but things were already broken. After everything that happened, many people stopped talking to me… but Bhakti didn’t 🤍  

She was the only one who came forward, asked how I was, and cared about what I was going through 🫶  

That’s when I realized her value. From that moment, I promised myself I would never make her feel alone again 🌸  

Since then, we’ve been together — through fights, laughter, small arguments, and countless memories 🥰✨  

And with time, our bond has only grown stronger and stronger 💞🐼`  },
  {
    emoji: '🎵',
    title: 'Our Playlist',
    para: 'April 5th — music sounds different when you\'re listening to it with someone in mind. Every love song secretly became about you. Every beat, every lyric. This one\'s our song. 🎵🌺',
  },
  {
    emoji: '🌺',
    title: 'Small Moments',
    para: 'April 6th — love lives in the small things. The way you laugh, the way you care, the way you exist. I notice everything about you, and every little thing makes me smile. 🌺',
  },
  {
    emoji: '🌟',
    title: 'You Shine',
    para: 'April 7th — in a sky full of stars, you\'re the one that pulls my gaze every time. Not the brightest perhaps, but the most beautiful. The one I always look for first. ✨💖',
  },
  {
    emoji: '🐼',
    title: 'Panda Day',
    para: 'April 8th — dedicated to our inner pandas. Soft, fluffy, adorable — just like this little world we\'ve built. A panda\'s heart is gentle, and so is yours. 🐼💕',
  },
  {
    emoji: '🍓',
    title: 'Sweet Like You',
    para: 'April 9th — sweet things remind me of you. Strawberries, desserts, kind words — all of them taste a little better because you exist. Thank you for being the sweetest part of my day. 🍓',
  },
  {
    emoji: '💌',
    title: 'Love Letter',
    para: 'April 10th — if I could write you a letter, it would say: you are seen, you are loved, you are more than enough. Every day with you in my thoughts is a gift I don\'t deserve but cherish forever. 💌',
  },
  {
    emoji: '🌈',
    title: 'Rainbow Day',
    para: 'April 11th — you are every color in my world. When everything seems grey, you somehow paint it with warmth and color. I\'m so lucky to see the world through our eyes. 🌈💖',
  },
  {
    emoji: '🌙',
    title: 'Midnight Thoughts',
    para: 'April 12th — the quietest hours of the night are the loudest when it comes to thinking about you. I hope wherever you are, you feel it — the thought of you, carried softly across the distance. 🌙',
  },
  {
    emoji: '💫',
    title: 'Almost There',
    para: 'April 13th — we\'re almost at the end of this little countdown, but this is just the beginning of something wonderful. Every page was written for you, Bhakti. Every word, every heart, every panda — all yours. 💫💖',
  },
  {
    emoji: '💖',
    title: 'Valentine\'s Surprise',
    para: 'April 14th — and here we are. The last card, the grandest day. I want you to know that you are my favorite story, my softest thought, my biggest reason to smile. Happy love day, Bhakti. This whole world was made for you. — Neel 🐼💖🌸',
  },
];

// Build dates array: April 2 → April 14, 2026
const startDate = new Date('2026-04-02');
const totalCards = 13; // Apr 2 to Apr 14

function buildDateCards() {
  const carousel = document.getElementById('carousel');
  const dots     = document.getElementById('carouselDots');
  carousel.innerHTML = '';
  dots.innerHTML = '';
  carouselPos = 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayNames   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const monthNames = ['January','February','March','April','May'];

  for (let i = 0; i < totalCards; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    date.setHours(0, 0, 0, 0);

    const isLocked = date > today;
    const mem = dateMemories[i];

    const card = document.createElement('div');
    card.className = 'date-card' + (isLocked ? ' locked' : '');
    card.dataset.index = i;

    card.innerHTML = `
      <span class="card-emoji">${mem.emoji}</span>
      <div class="card-date-label">${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</div>
      <div class="card-day">${dayNames[date.getDay()]}</div>
      <div class="card-locked-msg">Wait till this day 💕</div>
    `;

    if (!isLocked) {
      card.addEventListener('click', () => openMemory(i, date));
    }

    carousel.appendChild(card);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  }
}

let carouselPos = 0;

function getCardWidth() {
  const card = document.querySelector('.date-card');
  if (!card) return 174;
  return card.offsetWidth + 14; // card width + gap
}

function slideCarousel(dir) {
  const cards = document.querySelectorAll('.date-card');
  const max = cards.length - 1;
  carouselPos = Math.max(0, Math.min(carouselPos + dir, max));
  updateCarousel();
}

function goToSlide(idx) {
  carouselPos = idx;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  const cardW = getCardWidth();
  carousel.style.transform = `translateX(-${carouselPos * cardW}px)`;
  carousel.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === carouselPos);
  });
}

// Touch/swipe support
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  const active = document.querySelector('.page.active');
  if (active && active.id === 'datePage') {
    if (Math.abs(diff) > 50) slideCarousel(diff > 0 ? 1 : -1);
  }
});


/* ============================
   🌸 MEMORY PAGE
   ============================ */
function openMemory(index, date) {
  const mem = dateMemories[index];
  const monthNames = ['January', 'February', 'March', 'April', 'May'];
  const dayNames   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  document.getElementById('memoryDate').textContent =
    `${mem.emoji} ${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;

document.getElementById('memoryImage').style.backgroundImage = `url('image/img_${index+1}.jpg')`;
  document.getElementById('memoryText').innerHTML = mem.para;

  showPage('memoryPage');
}

function goBackToCards() {
  showPage('datePage');
}


/* ============================
   🎵 MUSIC TOGGLE
   ============================ */
let musicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');

  if (musicPlaying) {
    audio.pause();
    btn.textContent = '🎵';
    btn.classList.remove('playing');
  } else {
    // Use a public domain / royalty-free melody via Web Audio API
    playGeneratedMusic();
    btn.textContent = '🎶';
    btn.classList.add('playing');
  }
  musicPlaying = !musicPlaying;
}

// Generate gentle chime music via Web Audio API (no external file needed)
let audioCtx = null;
let musicInterval = null;

function playGeneratedMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
  const melody = [4, 6, 7, 6, 4, 2, 0, 2, 4, 4, 4];
  let noteIdx = 0;

  function playNote(freq, time, dur) {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.12, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.start(time);
    osc.stop(time + dur + 0.1);
  }

  musicInterval = setInterval(() => {
    if (!musicPlaying) { clearInterval(musicInterval); return; }
    playNote(notes[melody[noteIdx % melody.length]], audioCtx.currentTime, 0.5);
    noteIdx++;
  }, 500);
}

function stopGeneratedMusic() {
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
}

// Override toggle to use generated music
const originalToggle = toggleMusic;
window.toggleMusic = function () {
  const btn = document.getElementById('musicBtn');
  if (musicPlaying) {
    stopGeneratedMusic();
    btn.textContent = '🎵';
    btn.classList.remove('playing');
  } else {
    playGeneratedMusic();
    btn.textContent = '🎶';
    btn.classList.add('playing');
  }
  musicPlaying = !musicPlaying;
};
