window.onload = function () {
  
  var min = 00; 
  var sec = 00; 
  var appendSec = document.getElementsByClassName("sec")
  var appendMin = document.getElementsByClassName("min")
  var buttonStart = document.getElementsByClassName('btn-start');
  var buttonStop = document.getElementsByClassName('btn-stop');
  var buttonReset = document.getElementsByClassName('btn-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
  buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    sec = "00";
    min = "00";
    appendSec.innerHTML = sec;
    appendMin.innerHTML = min;
  }
  
   
  
  function startTimer () {
    sec++; 
    
    if(sec <= 9){
      appendSec.innerHTML = "0" + sec;
    }
    
    if (sec > 9){
      appendSec.innerHTML = sec;
      
    } 
    
    if (sec > 99) {
      console.log("min");
      min++;
      appendMin.innerHTML = "0" + min;
      sec = 0;
      appendSec.innerHTML = "0" + 0;
    }
    
    if (min > 9){
      appendMin.innerHTML = min;
    }
  
  }
  

}