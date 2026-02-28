const rightCont = document.querySelector('.hero-right');
const dayHero = document.getElementById('dayhero');
const dayHeroShy = document.getElementById('dayheroShy');
const nightHero = document.getElementById('nighthero');
const nightHeroShy = document.getElementById('nightheroShy');

function initializeHeroImages() {
  if (dayHero && nightHero) {
    if (isDarkMode === true) {
      nightHero.classList.add('show');
      dayHero.classList.remove('show');
    }else{
      nightHero.classList.remove('show');
      dayHero.classList.add('show');
    }
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

if (rightCont) {
  rightCont.addEventListener('mouseover', showShyHero);
  rightCont.addEventListener('mouseout', showDefaultHero);
}
