
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
