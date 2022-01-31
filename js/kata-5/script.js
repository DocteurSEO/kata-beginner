// Yes, it's this simple.

const slidingMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const title = document.querySelector('.title');
    const body = document.body;
   
    menuToggle.addEventListener('click', function(ev) {
      ev.preventDefault();
     
    

      if(!body.classList[1]){
        menuToggle.textContent = '🙉'
        title.textContent = 'Vive le Javascript'
      }else{
        menuToggle.textContent = '🙈'
        title.textContent = 'Vive le SEO'
      }
      body.classList.toggle('menu-active');
    });
  }
  
  slidingMenu();
  