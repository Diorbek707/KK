const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const answer = document.getElementById("answer");

// Кнопка «нет» убегает
noBtn.onmouseover = function () {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

// При нажатии «да»
yesBtn.onclick = function () {
  answer.innerHTML = "Я так и знал 🤨";
};
