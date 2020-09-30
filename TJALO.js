var scroll = window.requestAnimationFrame ||
             function(callback){window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.appear');

function loop(){
  elementsToShow.forEach(function (element){
    if (isElementInViewport(element)){
      element.classList.add('is-visible');
    }
    else{
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el){
  if(typeof jQuery === "function" && el instanceof jQuery){
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return(
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document
        .documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement
        .clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document
          .documentElement.clientHeight))
    );
}

function realTimeClock(){
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  hours = (hours > 12) ? hours - 12 : hours;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById('clock').innerHTML =
    hours + ":" + minutes + ":" + seconds + " ";
  var t = setTimeout(realTimeClock, 500);
}

function togglePopup1(){
  document.getElementById("popup1").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup2").classList.toggle("active");
}

function togglePopup3(){
  document.getElementById("popup3").classList.toggle("active");
}

function togglePopup4(){
  document.getElementById("popup4").classList.toggle("active");
}

function togglePopup5(){
  document.getElementById("popup5").classList.toggle("active");
}
