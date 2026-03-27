// ---------- Animated Gradient Background ----------
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradientOffset = 0;

function drawGradient() {
  gradientOffset += 0.5;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, `hsl(${gradientOffset % 360}, 80%, 50%)`);
  gradient.addColorStop(1, `hsl(${(gradientOffset + 60) % 360}, 80%, 50%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ---------- Particles ----------
const particles = [];
const particleCount = 80;

for(let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 1,
    speedY: (Math.random() - 0.5) * 1
  });
}

function drawParticles() {
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x < 0) p.x = canvas.width;
    if(p.x > canvas.width) p.x = 0;
    if(p.y < 0) p.y = canvas.height;
    if(p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff88";
    ctx.fill();
  });
}

// ---------- Animation Loop ----------
function animate() {
  drawGradient();
  drawParticles();
  requestAnimationFrame(animate);
}
animate();

// ---------- Custom Cursor ----------
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ---------- Interactive Title ----------
const title = document.getElementById("title");
const messages = ["Hello, World.", "You clicked 👀", "Nice.", "Keep going 🚀", "Coding is fun 😎"];

document.body.addEventListener("click", () => {
  const random = messages[Math.floor(Math.random() * messages.length)];
  title.textContent = random;
});

// ---------- Handle Resize ----------
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
