// ============================================
// Dark Mode Toggle
// ============================================
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.body;

let isDarkMode = false;

// ============================================
// Hero Image Elements
// ============================================
const rightCont = document.querySelector('.hero-right');
const dayHero = document.getElementById('dayhero');
const dayHeroShy = document.getElementById('dayheroShy');
const nightHero = document.getElementById('nighthero');
const nightHeroShy = document.getElementById('nightheroShy');

// ============================================
// Initialize Hero Images
// ============================================
function initializeHeroImages() {
  if (isDarkMode === true) {
    nightHero.classList.add('show');
    dayHero.classList.remove('show');
  }else{
    nightHero.classList.remove('show');
    dayHero.classList.add('show');
  }
}
initializeHeroImages();

//mouseover
function showShyHero() {
  if (isDarkMode === true) {
    dayHero.classList.remove('show');
    dayHeroShy.classList.remove('show');
    nightHeroShy.classList.add('show');
    nightHero.classList.remove('show');
  } else {
    nightHero.classList.remove('show');
    nightHeroShy.classList.remove('show');
    dayHero.classList.remove('show');
    dayHeroShy.classList.add('show');
  }
}

//mouseout
function showDefaultHero() {
  if (isDarkMode === true) {
    nightHero.classList.add('show');
    nightHeroShy.classList.remove('show');
  } else {
    dayHero.classList.add('show');
    dayHeroShy.classList.remove('show');
  }
}

rightCont.addEventListener('mouseover', showShyHero);
rightCont.addEventListener('mouseout', showDefaultHero);

// ============================================
// Dark Mode Functions
// ============================================
function darkModeBG() {
  isDarkMode = true;
  body.classList.add('dark-mode');
  moon.style.display = 'none';
  sun.style.display = 'block';
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = "#16161a";
  dayHero.classList.remove('show');
  nightHero.classList.add('show');
}

function lightModeBG() {
  isDarkMode = false;
  body.classList.remove('dark-mode');
  sun.style.display = 'none';
  moon.style.display = 'block';
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = "#ffffff";
  dayHero.classList.add('show');
  nightHero.classList.remove('show');
}

moon.addEventListener('click', darkModeBG);
sun.addEventListener('click', lightModeBG);







//Menu Section
const menu = document.getElementById('menu')
  const menuBar = document.getElementById('menuBar')
const menuClose = document.getElementById('menuClose')

  
  menuBar.addEventListener('click', function(){
    menu.classList.add('show');
    document.body.classList.add('menu-open');
  
  })
  menuClose.addEventListener('click', function(){
    menu.classList.remove('show');
    document.body.classList.remove('menu-open');
})
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBar.contains(e.target)) {
    menu.classList.remove('show');
    document.body.classList.remove('menu-open');
  }
})





/*Typewriter*/  
const text = "Hi, I'm Russel ";
const element = document.getElementById("typewriter");
const typingSpeed = 100;
const erasingSpeed = 100;
const delayBetween = 1100;
let i = 0;
let isDeleting = false;

function typeEffect() {
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

typeEffect();





let attempt = 0;
const submit = document.getElementById('submit');
  
  submit.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form from submitting
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const feedb = document.getElementById('feedback')
    attempt++;
 
   
    /*if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
      feedb.textContent = (`Please fill out all the input fields (${attempt}).`);
    } else {
      feedb.textContent = ('Successfully submitted.');
      attempt = 0;
      name.value = '';
      email.value = '';
      message.value = '';
    }
    setTimeout(()=>{
      feedb.textContent = " "

    },2000)*/
    const nameVal = name.value.trim();
const emailVal = email.value.trim();
const messageVal = message.value.trim();

if (nameVal === '' && emailVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out all sections.';

} else if (nameVal === '' && emailVal === '') {
  feedb.textContent = 'Please fill out the name and email sections.';

} else if (nameVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out the name and message sections.';

} else if (emailVal === '' && messageVal === '') {
  feedb.textContent = 'Please fill out the email and message sections.';

} else if (nameVal === '') {
  feedb.textContent = 'Please fill out the name section.';

} else if (emailVal === '') {
  feedb.textContent = 'Please fill out the email section.';

} else if (messageVal === '') {
  feedb.textContent = 'Please fill out the message section.';

} else {
  feedb.textContent = 'Successfully submitted.';
  name.value = '';
  email.value = '';
  message.value = '';

}


    setTimeout(()=>{
      feedb.textContent = " "

    },2000)
  });



