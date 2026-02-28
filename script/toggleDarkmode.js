const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.body;

let isDarkMode = false;

function darkModeBG() {
  isDarkMode = true;
  body.classList.add('dark-mode');
  moon.style.display = 'none';
  sun.style.display = 'block';
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = "#16161a";
  if (dayHero && nightHero) {
    dayHero.classList.remove('show');
    nightHero.classList.add('show');
  }
  localStorage.setItem('storeDark', 'showDark')
}

function lightModeBG() {
  isDarkMode = false;
  body.classList.remove('dark-mode');
  sun.style.display = 'none';
  moon.style.display = 'block';
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.backgroundColor = "#ffffff";
  if (dayHero && nightHero) {
    dayHero.classList.add('show');
    nightHero.classList.remove('show');
  }
  localStorage.removeItem('storeDark')
}

moon.addEventListener('click', darkModeBG);
sun.addEventListener('click', lightModeBG);

const DarkLocalStore = localStorage.getItem('storeDark')

if(DarkLocalStore){
  darkModeBG()
}else{
  lightModeBG()
}

