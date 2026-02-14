/* PASSWORD */
function unlock() {
  if (password.value === "123") {
    lockScreen.style.display = "none";
    mainContent.style.display = "block";
    startTyping();
    if (typeof bgAudio !== "undefined" && bgAudio) {
      try { bgAudio.play(); } catch (e) {}
    }
    playVideo();
  } else {
    alert("Wrong password 💔");
  }
}

function scrollDown() {
  document.querySelector(".story")
    .scrollIntoView({ behavior: "smooth" });
}

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

/* PHOTO SLIDESHOW */
let slides = document.querySelectorAll(".slide");
let s = 0;
setInterval(() => {
  slides[s].classList.remove("active");
  s = (s + 1) % slides.length;
  slides[s].classList.add("active");
}, 3000);

/* VIDEO SLIDESHOW */
const videos = [
  "video/vid1.mp4",
  "video/vid2.mp4",
  "video/vid3.mp4"
];
let v = 0;
const videoPlayer = document.getElementById("videoPlayer");

function playVideo() {
  videoPlayer.src = videos[v];
  videoPlayer.play();
}

videoPlayer.onended = () => {
  v = (v + 1) % videos.length;
  playVideo();
};

videoPlayer.onerror = () => {
  v = (v + 1) % videos.length;
  playVideo();
};

/* TYPEWRITER */
const text = `Dear My Love ❤️

Every heartbeat of mine whispers your name.
You are my happiness, my peace, my forever.

I promise to love you today,
tomorrow, and always 💕
`;

let i = 0;
function startTyping() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i++);
    setTimeout(startTyping, 50);
  }
}

/* HEART FIREWORKS */
const canvas = fireworks;
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function surprise() {
  const source = document.querySelector(".surprise h2");
  const popupField = document.getElementById("popupMsg");
  const text = (source && source.innerText.trim())
    ? source.innerText.trim()
    : "Will you be my Valentine forever? 💍❤️";
  if (popupField) popupField.innerText = text;
  document.getElementById("surprisePopup").classList.add("show");
}

function drawHeart() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  ctx.fillStyle = "rgba(255,100,150,0.8)";
  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    const hx = 16 * Math.sin(t) ** 3;
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2*t)
               - 2 * Math.cos(3*t) - Math.cos(4*t));
    ctx.beginPath();
    ctx.arc(x + hx * 6, y + hy * 6, 2, 0, Math.PI * 2);
    ctx.fill();
  }
  setTimeout(() => ctx.clearRect(0,0,canvas.width,canvas.height),1200);
}

const closePopupBtn = document.getElementById("closePopupBtn");
const surprisePopup = document.getElementById("surprisePopup");
if (closePopupBtn) closePopupBtn.onclick = () => surprisePopup.classList.remove("show");
if (surprisePopup) surprisePopup.addEventListener("click", e => { if (e.target === surprisePopup) surprisePopup.classList.remove("show"); });
