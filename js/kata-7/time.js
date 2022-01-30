const secondHand = document.querySelector('.hand__second');
const minHand = document.querySelector('.hand__min');
const hourHand = document.querySelector('.hand__hour');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function setDate (){
  const now = new Date();
  
  //Set Seconds
  const seconds = now.getSeconds();
  sec.innerText = (` ${seconds}`);
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  //Set Minutes
  const mins = now.getMinutes();
  min.innerText = (` ${mins}`);
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  //Set Hours
  const hours = now.getHours();
  hour.innerText = (` ${hours}`);
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);