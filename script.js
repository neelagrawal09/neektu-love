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
  document.querySelectorAll('.page.active').forEach(p => {
    p.classList.add('fade-out');
    setTimeout(() => {
      p.classList.remove('active', 'fade-out');
    }, 600);
  });

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
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    setTimeout(() => err.classList.remove('show'), 3000);
  }
}

function handleContinue() {
  showLovePopup();
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
function showLovePopup() {
  const popup = document.getElementById('lovePopup');
  popup.classList.add('show');
  spawnPopupHearts();
  spawnSparkles();

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
const dateMemories = [
  {
    emoji: '🌸',
    title: 'Day One',
   para: `From today, we relive all the beautiful moments we've shared… 💖  
Let's walk through our journey once again and feel every memory.

And today, let's talk about this little cute baby…  
My Bhaktu 🐼, my gollu 💕

A cute, dramatic, innocent, and sometimes silent soul…  
A little bachha who is hustling every day to make her future bright ✨  

I found this girl on Snapchat, just like a free ticket…  
But I never imagined that this "free ticket" would become my whole world.  

My smile giver, my stress reliever, my everything 💖  

From just a simple message…  
To becoming besties…  
To becoming so close that now this bond feels beyond everything 💞  

I am so proud of my girl for everything she is and everything she's becoming 🥺💖  

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
  para: `💖🌸 Let's start our journey from the very first moment we talked… 😊💕 <br><br>

It was during our online lecture — sachdev ma'am's English class 📚✨ <br>
And in that lecture, I randomly messaged Bhakti… 💬🥺 <br><br>

I don't even know why, but I just felt like texting her because she looked so cute 🥹💖 <br>
Her smile… her eyes… everything felt so special to me ✨💞 <br><br>

So my first message was simply — "Hi" 😊 <br>
And she replied — "Hi" 💕 <br><br>

Then I said, "We're talking for the first time…" <br>
She said, "Yeah" 😄 <br><br>

And from that small "hi"… <br>
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

From a random "Hi"… to my whole world 💞🌍 <br>
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
para: `💖🌸 It all started back in school when I thought I could manage everything — my relationship with Gauri and my bond with Bhakti 💭. I believed it wouldn't affect anything, but slowly things changed. Without realizing it, I started giving more attention to my girlfriend, and Bhakti began feeling ignored, even though she never deserved that 🥺💔  

One day, we were at Jaishankar panipuri 🥙. I was busy talking to my girlfriend about random things, while Bhakti was sitting nearby with Riya, quietly having bhelpuri. I didn't even notice her properly or talk to her… and that hurt her more than I understood at that time 😞  

Later, when my mom scolded me on call 📞 and Bhakti supported her, she got upset, walked away, and sat alone.  

The next day, I came to know she had cried 😢. That moment hit me hard. During our prelim exams 📚, I tried to talk to her and apologize, but things were already broken. After everything that happened, many people stopped talking to me… but Bhakti didn't 🤍  

She was the only one who came forward, asked how I was, and cared about what I was going through 🫶  

That's when I realized her value. From that moment, I promised myself I would never make her feel alone again 🌸  

Since then, we've been together — through fights, laughter, small arguments, and countless memories 🥰✨  

And with time, our bond has only grown stronger and stronger 💞🐼`  },
  {
  emoji: '🎵',
  title: 'Our Playlist',
  para: ` — So, as we talked about the last ending of 10th… that was the last time I saw Bhakti. 💖

It was my final day at school. Like every student does on their last day, we were all writing messages, names, and giving signatures on each other's shirts. It was emotional, happy, and a little painful at the same time. 🥺✨

But the one thing I regret the most… I didn't get a chance to write anything on Bhakti's shirt. I couldn't find her anywhere, and she didn't want to talk to me… because I had been ignoring her and giving more priority to my girlfriend. 💔

As usual, I was with my girlfriend and my friends like Gobindo and others. We had planned to go on a café date together. ☕💞

But then… at that moment… at a random shop (I don't even remember the name, just that it was a Punjabi shop), I saw Bhakti. 💫

I told my friends, "You guys go ahead, I'll come in 5 minutes." And I went straight to her. 🥺❤️

I said, "Please… just make my day memorable. I missed writing on your shirt… please let me write something." 💖

And then I wrote on her T-shirt:
"You are my crush… my best friend." 💞

That moment… that was the last time I saw Bhakti. 🥺🌸

After that, life became so difficult… so complicated… I never thought things would turn this way. I never imagined that I might never meet her again… unless she takes that one last step. 💔✨

But maybe… every story has its twists… 💫  
And maybe ours isn't over yet… 💖

👉 The interesting part continues in the next part… 🥺💕`,
},
  {
  emoji: '🌺',
  title: 'Small Moments',
  para: `— So you might be thinking… why this photo doesn't match the context. 🤔💭  

But actually, this photo wasn't given by you. I took it from your Instagram when you were live after our 10th. 💖✨  

Not exactly at the end… but during that time when we had stopped talking and meeting each other. 🥺💔  
I had secretly opened your Instagram… just to see you once, just to feel close to you somehow. 💞  
That's why this photo is here — to match those hidden feelings and that silent connection. 💫  

Now, if I talk about what happened after that café day… 🍿✨  
Get ready, because this part is a little dramatic and interesting. 😌💭  

After the café, I went to my bua's house. We were just having fun, chilling… nothing serious. 🏡💫  
Meanwhile, in our WhatsApp group, all our friends — Govind, Tejas, Sanika, Gauri — were sharing café pictures and moments. 📱📸  

But those same pictures reached my parents… 😶  
And suddenly, everything changed. My relationship became known to everyone at home.  

I got scolded… warned… not something very serious, but enough to shake everything. 💔  
I lost connection with almost everyone.  
I was completely alone for almost 2 months… 🥺  

That phase — staying lonely at home — was really difficult. 💭  

But… Bhakti stood up. 🤍  
She messaged me on Instagram — "Hi, kaisa hai?" 💬  

That one message… changed everything. 💖  

At that time, my mom had opened my Instagram, and somehow I got access again.  
I first went to talk to Gauri — she was live — but I was angry at her, at Tejas, at everyone. 😞  

And then… I saw your message. 💫  
I came to you and talked.  

I told you everything — how I felt you forgot me, how you didn't call or message me… 💔  

But when you explained everything… I understood. 🥺💞  
And we started talking again…  

But something had changed.  
A big… difficult change came into my life.  

That part… I'll tell you in the next card. 💫✨  

And about this picture… 📸  
This one is from Akola — when you were in your hostel room. 🏫💖  
You didn't send me this… your brother did. 💫  

And that's why this photo means more than just an image…  
It's a memory I held onto… when I needed you the most. 💞🌺`,
},
  {
  emoji: '🐼',
  title: 'Panda Day',
  para: ` — As we were talking about the dramatic change… the dramatic turn in life… 💫  

Things slowly started getting normal again. I began talking to Gauri… and also to you. 💖  
But when I was talking to Gauri, I noticed something strange… a sudden change in the way she talked, the way she texted. It didn't feel normal. 🤔  

After 2–3 days, I got a message from her account —  
"I am Gauri's brother. I know everything about both of you. Now you will not talk to Gauri. She will also not talk to you. Let's end everything here." 💔  

Honestly… I felt something was wrong.  
It didn't feel real. The change in Gauri's behavior was not acceptable. If her brother really knew everything, he would have talked to me directly… called me… confronted me. But nothing like that happened.  

So I was never sure… was it really her brother? Or something else? 💭  

I knew her brother was open-minded. He would have accepted things like this.  
And somewhere, I also knew that Bhakti felt bad for me… but at the same time, she was a little happy that Gauri was no longer in my life.  

Still… she supported me. She stood by my side and said that Gauri was wrong. 🤍  

After all this… I took admission in Government Polytechnic. 🎓✨  
And honestly… it was one of the best decisions of my life.  

At first, I struggled a little… but then I met amazing people — Chaitanya, Harsh, and many others. 💫  
My new friends, especially my female friends, brought happiness back into my life.  

Slowly… I started healing.  
I came out of my depression.  
I started smiling again… living again… being happy again. 🥺💖  

But then suddenly… one day…  
I got a message that all our old friends — Gauri, Anuj, and others — were meeting at Anuj's house.  

I went there…  

And what happened next… will be seen in the next part. 💫🍿  

And about this picture… 📸  
This is from Diwali. 🪔✨  
You had sent me this when I was in diploma and you were in 11th.  

I think it was on Telegram… I'm not sure from where exactly…  
But I still have it. 💖  

And that's why this photo is special…  
Because it carries a memory of you… from a time when everything felt different. 🐼💕`,
},
  {
  emoji: '🍓',
  title: 'Sweet Like You',
  para: ` — When I reached Anuj's home… everything started to change. 💫  

At the entrance, I met his brother Swaroop. I asked him where everyone was, and he said, "They're all inside the room."  

When I entered… Gauri saw me, Riya saw me… and they were completely shocked. 😶  
It felt like they weren't expecting me at all… like something hidden just got exposed.  

I went to talk to them… but they avoided me. No one wanted to face me. 💔  

At last, Govind took a step and said, "Let's go to the terrace and clear everything."  

So we all went upstairs… but instead of Gauri, Riya started talking.  
She kept saying, "She doesn't want to continue… why are you forcing?"  

But no one had the courage to look into my eyes and say it directly.  

Anuj… he also didn't support me. That shocked me the most. 😞  
Only Govind and Tejas stood by my side.  

After a lot of requests, explanations… I finally got tired.  
I said, "This is the last time. I will never talk to you again in my life." 💔  

And that day… was truly the end.  

From that day till today —  
I never saw Gauri again.  
Never talked to her.  
Never went back to that group.  

I only stayed in contact with Govind and Tejas. 🤍  

But honestly… that ending changed my life.  

When I left that group, I became free.  
No stress… no fear of getting caught… no overthinking.  

I started living again.  
Enjoying my diploma life… smiling again… being happy again. 🥺💖  

And when I told all this to Bhakti…  
She simply said, "I already told you… this would happen."  

She even told me that Gauri was already with someone else in Akola…  
And that was the real end of that relationship.  

But that ending… became a new beginning. 💫  

Not a new love… but my first love.  
Bhakti. 💖  

Yes, I made mistakes.  
In 10th, we all just want a relationship… and I chose wrong.  
But after everything… I realized who truly mattered.  

Life with Bhakti became beautiful. 🥺💕  

But her life had its own pain…  
She lost her father… 💔  

When I came to know that… I was deeply hurt for her.  
Because I knew how much she loved him.  

I called Aniruddh, our common friend… we both were shocked.  
I wanted to go and meet her… to support her…  

But I couldn't. I had my diploma exams at that time.  
And that is something I still regret. 😞  

After that incident, she moved to Akola for her studies.  

After 3–5 months… she texted me on Telegram. 💬  
And I was shocked…  

I didn't know how to talk… how to comfort her…  
But I took a step.  

I asked her how she was…  
She was broken… she just needed someone… someone to listen.  

That day, I realized…  
I wasn't there when she needed me the most. 💔  

So I made a promise to myself —  
No matter what happens… I will always be there for her.  

I can't replace what she lost…  
But I will make sure she never feels alone again.  

I will make her smile…  
I will make her feel loved…  
I will never let her cry alone again. 💞  

And after that…  

You won't believe how we started talking again…  
In ways you can't even imagine… 😏💫  

👉 That story… I'll tell you in the next part… 🍓💕`,
},
  {
  emoji: '💌',
  title: 'Love Letter',
  para: `— After everything that happened… slowly, things started stabilizing. 💫  

After 2–3 months, life became a little normal again.  
I used to talk to Bhakti on Telegram… but since she was preparing for JEE, she would install and uninstall Telegram again and again. 📚💖  

So we couldn't talk daily…  
Sometimes after 1 day… sometimes after 2–5 days… but still, we stayed connected somehow. 💞  

Then one day… she gave me her mobile number. ☎️✨  

At that time, I didn't even have my own phone in my first semester.  
So I took my friend Chaitanya's phone… dialed her number…  

I still remember… I was standing outside my Gauri sir's maths tuition…  
And for the first time… I talked to Bhakti on call. 🥺❤️  

She had that small black Nokia-type phone with buttons…  
That simple call meant everything to me. 💖  

After that… we didn't talk for 2–3 months again.  

Then came that painful phase… after her father's incident. 💔  
She told me she was focusing on her 12th and JEE preparation, doing online lectures…  

She stopped using Telegram completely.  
And I had no way to reach her… no way to talk. 😞  

But then… suddenly… she texted me on Instagram. 💬✨  
And I was shocked… but happy.  

We started talking again… slowly…  

After that, we used every possible way to stay connected —  
Instagram, Snapchat, Telegram… and especially SMS. 📱💞  

SMS became something special…  

When I sent her a message… I had to wait for hours… sometimes a whole day for a reply. 🥺  
And that waiting… somehow felt beautiful.  

Because every reply from her… felt precious. 💖  

I was always ready to reply instantly…  
But Bhakti… she always took her time — 2–3 hours… sometimes even a whole day. 😄  

From that time till today… she is still the same.  
Not a chat person at all… a very slow replier. 😌💫  

But even then… we talked.  

Short messages… long conversations…  
Every message carried emotions.  

Those chats… those waits…  
They showed how deeply we were connected…  

At that time… both of us were going through difficult phases in life…  
But still… we were there for each other. 🤍  

And after that year…  
When she was in 12th and I was in my second year…  

We created some of the most beautiful moments of our lives. 💖✨  

👉 That part… I'll tell you in the next story… 💌💕`,
},
 {
  emoji: '💖',
  title: 'Valentine\'s Surprise',
  para: `— One of the most beautiful days of my life… my Bhakti's birthday. 🎂💖  

After 3 long years… I was finally going to meet her. 🥺✨  
Just imagine that feeling…  

When I was leaving my home, I was so happy… smiling non-stop, getting ready with excitement.  
Even my mom noticed and asked, "Why are you so happy today?" 😄  

I just said I'm going to meet my friends…  
But inside… I knew where my happiness was coming from. 💞  

I went to the cake shop where I had already decided the cake design a month before. 🎂  
Then I called Bhakti — she told me she was at Dr. Chetan Agarwal's clinic for a dental checkup and would reach home in 30–40 minutes.  

But for me… even those minutes felt too long. 🥺  

I had some work from my father's side that day, so I decided to go the next day.  

The next day, I went again to the same cake shop.  
The uncle I knew wasn't there at first, and I couldn't find the same cake design.  
So I almost decided to take a rasmalai cake instead…  

But then he arrived. ✨  
I explained the design to him, and he said, "Wait… I have two similar designs in the kitchen."  

When he showed them… I picked one immediately. 💖  

And then… I went to Bhakti's house.  

After 3 years… I finally saw her. 🥺💞  
That moment… that relief… that happiness…  
I was nervous… but my heart was literally dancing with joy. 💓  

We went inside, sat on the sofa, and kept the cake aside to chill.  
And then… we started talking.  

All those 3 years of missed conversations…  
Every memory, every story, every small moment… we shared everything. 💫  

We talked for 3–4 hours…  
But honestly… it felt like just a few minutes. 🥺  

Time just flew.  

Finally, we brought the cake… but it was slightly damaged from one side 😅  
(I had brought it on a scooty, so it got a little messed up.)  

But still… it didn't matter.  
The moment was perfect. 💖  

We cut the cake…  
Her mom and brother were there…  

And that entire moment…  
That meeting…  

Is one of the most memorable and special moments of my life. 💞✨`,
},
  {
  emoji: '🌈',
  title: 'Rainbow Day',
  para: `— One of the most beautiful days of my life… my Bhakti's birthday. 🎂💖  

After 3 long years… I was finally going to meet her. 🥺✨  
Just imagine that feeling…  

When I was leaving my home, I was so happy… smiling non-stop, getting ready with excitement.  
Even my mom noticed and asked, "Why are you so happy today?" 😄  

I just said I'm going to meet my friends…  
But inside… I knew the real reason. 💞  

I went to the cake shop where I had already decided the cake design a month before. 🎂  
Then I called Bhakti — she told me she was at Dr. Chetan Agarwal's clinic for a dental checkup and would reach home in 30–40 minutes.  

But for me… even those minutes felt too long. 🥺  

I had some work that day, so I decided to go the next day.  

The next day, I went again to the same cake shop.  
At first, I couldn't find the same cake design, so I almost chose a rasmalai cake…  

But then the shop uncle came and said he had two similar designs in the kitchen. ✨  
The moment I saw them… I chose one immediately. 💖  

And then… I went to Bhakti's house.  

After 3 years… I finally saw her. 🥺💞  
That moment… that happiness… that relief…  
I was nervous, but my heart was dancing with joy. 💓  

We sat together, kept the cake to chill, and started talking…  
All those 3 years of missed conversations… everything came out at once. 💫  

We talked for hours…  
But it felt like just a few minutes. 🥺  

Time just flew…  

When we finally cut the cake, it was slightly damaged from one side 😅  
(because I brought it on a scooty)…  

But it didn't matter at all.  
Because the moment was perfect. 💖  

Her mom and brother were there…  
And that whole meeting…  

Became one of the most special and unforgettable memories of my life. 🌈💖`,
},
  {
  emoji: '🌙',
  title: 'Midnight Thoughts',
  para: ` — One of the most beautiful moments of our life… the Nagpur meet. 🥺💖  

This was the second time we met after her birthday…  
But this time… it felt even more special. ✨  

I had a competition — Depics — in Nagpur, where we were presenting our project. 🎓  
But honestly… the competition wasn't the main reason.  

The real reason… was her. 💞  

I just wanted to meet Bhakti… at any cost.  

While planning the trip, I made sure of one thing —  
No matter what happens, I need at least one full day just for her.  

My friends like Sandesh were like, "Why are we staying extra in Nagpur?"  
But I said clearly, "I'm staying. If you want, you can go… but I'll be here." 😌  

After the competition, I came back, got ready… and went to meet her.  

But when I reached… I came to know her mom was hospitalized. 🏥💔  
So instead of anywhere else… I went to the hospital.  

And then… I saw her…  
Walking out of the building…  

That moment… I can't explain…  
A smile just came on my face automatically —  
Like… "Haaaye… my girl…" 🥺💖  

We met her mom, talked for a bit about her health, and I told Bhakti to take care of her. 🤍  

After that… we went for a scooty ride. 🛵✨  
And of course… she was driving. 😄  

I was sitting behind her… just enjoying everything —  
The ride… the हवा… the moment… her presence…  

We were laughing, teasing, doing little mischiefs —  
From gudgudi to small playful moments…  
That ride became one of the happiest memories of my life. 💞  

I recorded those moments in my heart forever.  

At the end… we had her favorite ice cream together. 🍦💖  

And when it was time to leave…  

She gave me a hug. 🥺  

Not because I asked…  
But from her heart.  

And in that moment…  
I completely fell for her. 💓  

Because Bhakti…  
She is simple… cute… pure…  

And truly… one of the most special people in my life. 💖  

I love you, Bhakti… always. 🌙💕`,
},
{
  emoji: '💫',
  title: 'Almost There',
  para: ` — This was our third meeting… after Nagpur. 💖  

After exams, when she came to Washim, we met again at her home. 🏡✨  
It wasn't a very dramatic day… not something big…  

Just a simple, calm, and beautiful day. 🥺  

We sat together… talked about everything —  
Life, situations, what we went through…  

Divya was also there, and we all just had a normal, peaceful time together. 🤍  

There wasn't much to say…  
But sometimes… the simplest moments are the most special ones. 💞  

And at the end…  

She gave me a hug again. 🥺💖  

That small moment…  
Was one of the sweetest feelings ever.  

And that's when I realized…  
This journey — from distance… to connection… to love…  

Was something truly special. 💫  

And I made a promise to Bhakti…  

No matter what happens…  
I will always be there for you.  
In every moment… in every situation… for life. 💖✨`,
},
  {
    emoji: '💖',
    title: 'Valentine\'s Surprise',
    para: 'April 14th — and here we are. The last card, the grandest day. I want you to know that you are my favorite story, my softest thought, my biggest reason to smile. Happy love day, Bhakti. This whole world was made for you. — Neel 🐼💖🌸',
  },
];

const startDate = new Date('2026-04-03');
const totalCards = 12;

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

    const isLocked = false;
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
  return card.offsetWidth + 14;
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

  /* ====================================================
     🎂 SPECIAL LAST CARD — APRIL 14 BIRTHDAY EXPERIENCE
     ==================================================== */
  if (index === totalCards - 1) {
    const unlockTime = new Date('2026-04-14T00:00:00');
    const now = new Date();

    if (now < unlockTime) {
      // Show countdown lock screen
      showBirthdayCountdown(unlockTime);
    } else {
      // Unlock: trigger cinematic birthday experience
      startBirthdayExperience();
    }
    return;
  }

  // Normal memory page for all other cards
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


/* ============================================================
   🔒 BIRTHDAY COUNTDOWN LOCK SCREEN
   ============================================================ */
let countdownInterval = null;

function showBirthdayCountdown(unlockTime) {
  // Remove existing overlay if any
  const existing = document.getElementById('birthdayLock');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'birthdayLock';
  overlay.innerHTML = `
    <div class="bday-lock-inner">
      <div class="bday-lock-panda">🐼</div>
      <h2 class="bday-lock-title">Something magical is coming…</h2>
      <p class="bday-lock-sub">Wait for your special moment 💖</p>
      <div class="bday-countdown-wrap">
        <div class="bday-count-block">
          <span class="bday-count-num" id="cntDays">--</span>
          <span class="bday-count-label">Days</span>
        </div>
        <div class="bday-count-sep">:</div>
        <div class="bday-count-block">
          <span class="bday-count-num" id="cntHours">--</span>
          <span class="bday-count-label">Hours</span>
        </div>
        <div class="bday-count-sep">:</div>
        <div class="bday-count-block">
          <span class="bday-count-num" id="cntMins">--</span>
          <span class="bday-count-label">Minutes</span>
        </div>
        <div class="bday-count-sep">:</div>
        <div class="bday-count-block">
          <span class="bday-count-num" id="cntSecs">--</span>
          <span class="bday-count-label">Seconds</span>
        </div>
      </div>
      <p class="bday-lock-note">April 14, 2026 · Midnight 🌙</p>
      <button class="bday-close-btn" onclick="closeBirthdayLock()">← Go Back</button>
    </div>
    <div class="bday-lock-floats" id="bdayLockFloats"></div>
  `;
  document.body.appendChild(overlay);

  // Spawn floating emojis in background
  spawnLockFloats();

  // Tick every second
  function tick() {
    const now = new Date();
    const diff = unlockTime - now;
    if (diff <= 0) {
      clearInterval(countdownInterval);
      overlay.remove();
      startBirthdayExperience();
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cntDays').textContent  = String(d).padStart(2,'0');
    document.getElementById('cntHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cntMins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cntSecs').textContent  = String(s).padStart(2,'0');
  }
  tick();
  countdownInterval = setInterval(tick, 1000);
}

function spawnLockFloats() {
  const c = document.getElementById('bdayLockFloats');
  if (!c) return;
  const emojis = ['💖','✨','🎂','🌸','💕','🍮','🍬','💞','🌺'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('span');
    el.className = 'bday-lock-float';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    const dur = 7 + Math.random() * 8;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = Math.random() * 4 + 's';
    c.appendChild(el);
  }
}

function closeBirthdayLock() {
  clearInterval(countdownInterval);
  const el = document.getElementById('birthdayLock');
  if (el) {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 600);
  }
}


/* ============================================================
   🎂 BIRTHDAY CELEBRATION — PHASE 1: CAKE ANIMATION
   ============================================================ */
function startBirthdayExperience() {
  // Remove lock if still present
  const lock = document.getElementById('birthdayLock');
  if (lock) lock.remove();

  const phase1 = document.createElement('div');
  phase1.id = 'bdayPhase1';
  phase1.innerHTML = `
    <div class="bday-p1-inner">
      <div class="bday-p1-title">Happy Birthday</div>
      <div class="bday-p1-name">My Cute Cute 💖</div>
      <div class="bday-p1-sweets">
        <span class="sweet-item" style="animation-delay:0.3s">Rasmalai 🍮</span>
        <span class="sweet-divider">|</span>
        <span class="sweet-item" style="animation-delay:0.6s">Kaju Katli 🍬</span>
        <span class="sweet-divider">|</span>
        <span class="sweet-item" style="animation-delay:0.9s">Cake 🎂</span>
      </div>

      <!-- Cake SVG -->
      <div class="bday-cake-wrap">
        <svg class="bday-cake-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <!-- plate -->
          <ellipse cx="80" cy="138" rx="68" ry="10" fill="rgba(255,180,200,0.3)"/>
          <!-- bottom tier -->
          <rect x="20" y="100" width="120" height="38" rx="12" fill="#ff85a1"/>
          <rect x="20" y="100" width="120" height="10" rx="6" fill="#ff4d79"/>
          <!-- top tier -->
          <rect x="38" y="66" width="84" height="36" rx="10" fill="#ffb3c6"/>
          <rect x="38" y="66" width="84" height="10" rx="5" fill="#ff85a1"/>
          <!-- frosting drips -->
          <ellipse cx="80" cy="66" rx="42" ry="8" fill="white" opacity="0.9"/>
          <path d="M50 66 Q55 78 60 66" fill="white" opacity="0.9"/>
          <path d="M72 66 Q77 80 82 66" fill="white" opacity="0.9"/>
          <path d="M94 66 Q99 78 104 66" fill="white" opacity="0.9"/>
          <!-- decorations -->
          <circle cx="50" cy="110" r="5" fill="#ffe0cc"/>
          <circle cx="68" cy="116" r="4" fill="#e8d5f5"/>
          <circle cx="86" cy="110" r="5" fill="#ffe0cc"/>
          <circle cx="104" cy="116" r="4" fill="#e8d5f5"/>
          <circle cx="120" cy="110" r="5" fill="#ffe0cc"/>
          <!-- hearts on cake -->
          <text x="60" y="92" font-size="14" text-anchor="middle">💖</text>
          <text x="100" y="92" font-size="14" text-anchor="middle">🌸</text>
          <!-- candle -->
          <rect id="candleBody" x="74" y="44" width="12" height="24" rx="4" fill="#ffd6e8"/>
          <!-- flame -->
          <g id="candleFlame" class="flame-on">
            <ellipse cx="80" cy="38" rx="6" ry="9" fill="#ffcc00" opacity="0.9"/>
            <ellipse cx="80" cy="36" rx="3.5" ry="6" fill="#ff8800" opacity="0.8"/>
            <ellipse cx="80" cy="34" rx="2" ry="4" fill="white" opacity="0.7"/>
          </g>
          <!-- blown out smoke (hidden initially) -->
          <g id="candleSmoke" style="display:none">
            <line x1="80" y1="42" x2="78" y2="28" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" opacity="0.6" class="smoke-line"/>
            <line x1="80" y1="42" x2="82" y2="26" stroke="#bbb" stroke-width="1" stroke-linecap="round" opacity="0.5" class="smoke-line"/>
          </g>
        </svg>
      </div>

      <div class="bday-p1-msg" id="bdayMsg">Make a wish… 🥺✨</div>
    </div>

    <!-- confetti container -->
    <div id="confettiContainer"></div>
    <!-- floating birthday emojis -->
    <div id="bdayFloatEmojis"></div>
  `;
  document.body.appendChild(phase1);

  // Spawn confetti
  spawnConfetti();
  spawnBdayFloatEmojis();

  // Blow candle after 4 seconds
  setTimeout(() => {
    blowCandle();
  }, 4000);

  // Transition to collage after 12 seconds
  setTimeout(() => {
    phase1.style.opacity = '0';
    phase1.style.transform = 'scale(1.08)';
    phase1.style.transition = 'opacity 1s ease, transform 1s ease';
    setTimeout(() => {
      phase1.remove();
      startCollageExperience();
    }, 1000);
  }, 12000);
}

function blowCandle() {
  const flame = document.getElementById('candleFlame');
  const smoke = document.getElementById('candleSmoke');
  const msg   = document.getElementById('bdayMsg');

  if (flame) {
    flame.style.transition = 'opacity 0.4s ease';
    flame.style.opacity = '0';
    setTimeout(() => { flame.style.display = 'none'; }, 400);
  }
  if (smoke) {
    smoke.style.display = 'block';
    smoke.style.animation = 'smokeRise 2s ease forwards';
  }
  if (msg) {
    msg.style.opacity = '0';
    setTimeout(() => {
      msg.textContent = 'You deserve all the happiness in the world 💖';
      msg.style.opacity = '1';
    }, 600);
  }
}

function spawnConfetti() {
  const c = document.getElementById('confettiContainer');
  if (!c) return;
  const colors = ['#ff4d79','#ffb3c6','#e8d5f5','#ffe0cc','#c8f0e0','#ffd700','#ff85a1'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width  = (6 + Math.random() * 8) + 'px';
    piece.style.height = (10 + Math.random() * 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay    = Math.random() * 2 + 's';
    c.appendChild(piece);
  }
}

function spawnBdayFloatEmojis() {
  const c = document.getElementById('bdayFloatEmojis');
  if (!c) return;
  const emojis = ['💖','✨','🎂','🍬','🍮','🌸','💕','🎉','💞','🎊'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.className = 'bday-float-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (1.2 + Math.random() * 1.8) + 'rem';
    const dur = 5 + Math.random() * 6;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = Math.random() * 3 + 's';
    c.appendChild(el);
  }
}


/* ============================================================
   📸 COLLAGE MEMORY EXPERIENCE — PHASE 2
   ============================================================ */
// Put your birthday memory images in: image/bday/bday_1.jpg, bday_2.jpg, ...
// Change this count to match how many images you have
const BDAY_IMAGE_COUNT = 12;

function startCollageExperience() {
  const collage = document.createElement('div');
  collage.id = 'collageExperience';
  collage.innerHTML = `
    <div class="collage-bg-glow"></div>
    <div id="collageBoard"></div>
    <div id="collageFloats"></div>
    <div class="collage-message" id="collageMsg">
      <div class="collage-msg-inner">
        <span class="collage-panda">🐼</span>
        <p>Every photo tells a story…</p>
        <p>Every moment was magic…</p>
        <p>Because of <strong>you</strong> 💖</p>
      </div>
    </div>
    <button class="collage-done-btn" id="collageDoneBtn" onclick="closeCollage()">
      💖 To Our World
    </button>
  `;
  document.body.appendChild(collage);

  spawnCollageFloats();

  // Build images one by one
  const board = document.getElementById('collageBoard');
  const images = [];
  for (let i = 1; i <= BDAY_IMAGE_COUNT; i++) {
    images.push(`image/bday/bday_${i}.jpg`);
  }

  // Shuffle
  images.sort(() => Math.random() - 0.5);

  let idx = 0;
  function addNextImage() {
    if (idx >= images.length) {
      // Show final message + done button
      setTimeout(() => {
        const msg = document.getElementById('collageMsg');
        const btn = document.getElementById('collageDoneBtn');
        if (msg) { msg.style.opacity = '1'; msg.style.transform = 'translateY(0)'; }
        if (btn) { btn.style.opacity = '1'; btn.style.transform = 'translateY(0)'; }
      }, 800);
      return;
    }

    const photo = document.createElement('div');
    photo.className = 'collage-photo';

    // Random position (avoid extreme edges for visibility)
    const maxX = window.innerWidth  - 200;
    const maxY = window.innerHeight - 280;
    const x = 20 + Math.random() * Math.max(maxX - 20, 100);
    const y = 20 + Math.random() * Math.max(maxY - 20, 100);
    const rot = -12 + Math.random() * 24;   // -12 to +12 deg
    const scale = 0.85 + Math.random() * 0.35;
    const zIdx = 10 + idx * 2;

    // Random size variation
    const sizeClass = Math.random() > 0.6 ? 'photo-lg' : (Math.random() > 0.5 ? 'photo-sm' : '');

    photo.classList.add(...sizeClass.split(' ').filter(Boolean));
    photo.style.left      = x + 'px';
    photo.style.top       = y + 'px';
    photo.style.zIndex    = zIdx;
    photo.style.transform = `rotate(${rot}deg) scale(0)`;
    photo.style.setProperty('--rot', rot + 'deg');

    // Polaroid inner
    photo.innerHTML = `
      <div class="photo-polaroid">
        <div class="photo-img" style="background-image:url('${images[idx]}')"></div>
        <div class="photo-caption">${getPhotoCaption(idx)}</div>
      </div>
    `;

    board.appendChild(photo);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        photo.style.transition = `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease`;
        photo.style.transform  = `rotate(${rot}deg) scale(${scale})`;
        photo.style.opacity    = '1';
      });
    });

    idx++;
    const delay = 1800 + Math.random() * 1200;
    setTimeout(addNextImage, delay);
  }

  addNextImage();
}

function getPhotoCaption(i) {
  const captions = [
    'My favorite smile 💖',
    'You & me 🌸',
    'This moment… 🥺',
    'Pure happiness ✨',
    'My cute panda 🐼',
    'Always you 💞',
    'Best memory 💕',
    'My world 🌺',
    'So perfect 💫',
    'I love you 💖',
    'Bhakti 🥺',
    'Our story 💗',
    'Sunshine 🌸',
    'Heart full 💓',
    'My girl 💝',
    'Forever 💞',
  ];
  return captions[i % captions.length];
}

function spawnCollageFloats() {
  const c = document.getElementById('collageFloats');
  if (!c) return;
  const emojis = ['💖','✨','🌸','💕','💞'];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('span');
    el.className = 'collage-float-heart';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    const dur = 8 + Math.random() * 10;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = Math.random() * 5 + 's';
    c.appendChild(el);
  }
}

function closeCollage() {
  const el = document.getElementById('collageExperience');
  if (el) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      el.remove();
      // Show normal last card memory
      const date = new Date('2026-04-14');
      const mem = dateMemories[totalCards - 1];
      const monthNames = ['January', 'February', 'March', 'April', 'May'];
      const dayNames   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      document.getElementById('memoryDate').textContent =
        `${mem.emoji} ${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
      document.getElementById('memoryImage').style.backgroundImage = `url('image/img_12.jpg')`;
      document.getElementById('memoryText').innerHTML = mem.para;
      showPage('memoryPage');
    }, 1000);
  }
}


/* ============================
   🎵 MUSIC TOGGLE
   ============================ */
let musicPlaying = false;

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