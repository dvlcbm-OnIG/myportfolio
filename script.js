const menu = document.getElementById('menu')
  const menuBar = document.getElementById('menuBar')
const menuClose = document.getElementById('menuClose')

  
  menuBar.addEventListener('click', function(){
    menu.classList.add('show');
    
  
  })
  menuClose.addEventListener('click', function(){
    menu.classList.remove('show');
})
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBar.contains(e.target)) {
    menu.classList.remove('show');
  }
})


// Dark Mode Toggle
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.body;
let isDarkMode = true;
moon.addEventListener('click', function(){
  body.classList.add('dark-mode');
  moon.style.display = 'none';
  sun.style.display = 'block';
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = " #16161a";
  isDarkMode = true;
})

sun.addEventListener('click', function(){
  body.classList.remove('dark-mode');
  sun.style.display = 'none';
  moon.style.display = 'block';
  isDarkMode = false;
    document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = " #ffffff";
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
    element.innerHTML = text + '<span class="wave">👋</span>';
    isDeleting = true;
    setTimeout(typeEffect, delayBetween + 1000);
  }
  else if (isDeleting && i === 0) {
    isDeleting = false;
    setTimeout(typeEffect, delayBetween);
  }
}

typeEffect();






const submit = document.getElementById('submit');
  
  submit.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form from submitting
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
      alert('Please fill out all the input fields.');
    } else {
      alert('Successfully submitted.');
      name.value = '';
      email.value = '';
      message.value = '';
    }
  });
  
  
  
  