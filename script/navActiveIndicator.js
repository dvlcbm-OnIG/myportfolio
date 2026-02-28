//nav active indicator
const aTags = document.querySelectorAll('.right a');

if (window.location.pathname.includes('index.html')) {
  aTags[0].style.color = '#6366f1'
}else if (window.location.pathname.includes('projects.html')) {
  aTags[1].style.color = '#6366f1'
}else if (window.location.pathname.includes('photos.html')) {
  aTags[2].style.color = '#6366f1'
}else if (window.location.pathname.includes('me.html')) {
  aTags[3].style.color = '#6366f1'
}