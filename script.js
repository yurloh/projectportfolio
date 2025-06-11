const texts = [
  "fueled by monster!",
  "built by w5vy. on discord",
  "ts pmo 🥀🥀",
  "i won a connect 4 game in 3 moves",
  "i love taking toaster baths"
];

const randomText = texts[Math.floor(Math.random() * texts.length)];
document.getElementById("randomText").innerText = randomText;
