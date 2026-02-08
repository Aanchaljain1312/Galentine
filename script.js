document.getElementById("noBtn").addEventListener("mouseenter", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const distanceX = e.clientX - (rect.left + rect.width / 2);
  const distanceY = e.clientY - (rect.top + rect.height / 2);

  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  // If mouse is close to button (within 100px)
  if (distance < 100) {
    moveButton();
  }
});

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;


  noBtn.style.transition = "all 0.5s ease";   // 👈 smooth movement
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}


yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 },
    shapes: ["heart"],
    scalar: 2.5,
    ticks: 200,
    colors: ["#ff4d8d", "#000000" , "#f63232ff"], // pink & black & white
  });

  document.querySelector(".card").innerHTML = `
    <div class="celebration">
      <div class="hearts">💖✨💖✨💖</div>
      <h2 class="title">💅🏻 It’s Our Dayyy 💅🏻</h2>
      <p class="title">Who needs romance when we have this legendary friendship?!✨</p>
      <br>
      <p class="title">Cheers to built-in best time, best vibe, and best support systems!! 🥂</p>
      <br>
      <h3 class="title">💅 Happy Galentine’s, queen 👑💖</h3>
      <div class="heartss">✨💘✨💘✨</div>
    </div>
  `;
});
