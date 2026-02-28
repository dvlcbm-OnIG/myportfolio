/*Typewriter*/  
const text = "Hi, I'm Russel ";
const element = document.getElementById("typewriter");
const typingSpeed = 100;
const erasingSpeed = 100;
const delayBetween = 1100;
let i = 0;
let isDeleting = false;

function typeEffect() {
  if (!element) return;
  if (!isDeleting && i < text.length) {
    element.innerHTML = text.substring(0, i + 1);
    i++;
    setTimeout(typeEffect, typingSpeed);
  }
  else if (isDeleting && i > 0) {
    element.innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(typeEffect, erasingSpeed);
  }
  else if (!isDeleting && i === text.length) {
    element.innerHTML = text + '<span class="wave" style="font-size: 2rem;">👋</span>';
    isDeleting = true;
    setTimeout(typeEffect, delayBetween + 1000);
  }
  else if (isDeleting && i === 0) {
    isDeleting = false;
    setTimeout(typeEffect, delayBetween);
  }
}

if (element) typeEffect();