// Scroll animations
AOS.init();

// Back to top button
const topBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.onclick = () => document.body.classList.toggle("dark-mode");

// Typewriter effect
const nameText = document.querySelector(".typewriter");
let index = 0;
const originalText = nameText.textContent;
nameText.textContent = "";

function typeWriter() {
  if (index < originalText.length) {
    nameText.textContent += originalText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
