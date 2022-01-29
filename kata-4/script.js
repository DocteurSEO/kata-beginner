// Yes, it's this simple.

const pickaBou = () => {
    const bou = document.querySelector('a');
   
   
    bou.addEventListener('click', function(ev) {
      

      if(bou.textContent == '🙈'){
        bou.textContent = '🙉'
      
      }else{

        bou.textContent = '🙈'
      }
    
    });
  }
  
  pickaBou();
  