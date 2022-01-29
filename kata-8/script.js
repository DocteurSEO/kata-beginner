function playSound(e) {
    const audio = e.keyCode ?
    document.querySelector(`audio[data-key="${e.keyCode}"]`) :
    document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
    const key = e.keyCode ?
    document.querySelector(`.key[data-key="${e.keyCode}"]`) :
    document.querySelector(`.key[data-key="${this.attributes['data-key'].value}"]`);
    if (!audio) return; //stops function if not audio element
    audio.currentTime = 0; //allows multiple presses and starts again
    audio.play();
    key.classList.add('playing');
  };
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSound);
  });
  
  window.addEventListener('keydown', playSound);