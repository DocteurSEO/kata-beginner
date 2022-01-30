// Yes, it's this simple.

const slidingMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const title = document.querySelector('.title');
    const body = document.body;
   
    menuToggle.addEventListener('click', function(ev) {
      ev.preventDefault();
     
      menuToggle.textContent = '🙈'
      title.textContent = 'Vive le SEO'

      if(!body.classList[1]){
        menuToggle.textContent = '🙉'
        title.textContent = 'Vive le Javascript'
      }
      body.classList.toggle('menu-active');
    });
  }
  
  slidingMenu();
  