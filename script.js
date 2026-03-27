// Fade in page
window.onload = () => {
  document.body.style.opacity = "1";
};

// Change text on click
document.body.addEventListener("click", () => {
  const title = document.getElementById("title");

  const messages = [
    "Hello, World.",
    "You clicked 👀",
    "Nice.",
    "Keep going 🚀",
    "Coding is fun 😎"
  ];

  const random = messages[Math.floor(Math.random() * messages.length)];
  title.textContent = random;
});
