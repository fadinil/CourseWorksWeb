var num = 1; 
 
function fLeft()
{
	let p = document.getElementsByClassName("picture");
	num--;
	if (num <= 0) 
		num = 3;
		p[0].style.backgroundImage = `url(../images/banner-image_${num}.jpg)`;
}
 
function fRight()
{
	let p = document.getElementsByClassName("picture");
	num++;
	if (num > 3)
		num = 1;
		p[0].style.backgroundImage = `url(../images/banner-image_${num}.jpg)`;
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = 'December 31 2021';
initializeClock('countdown', deadline);


function lifeSite() {
	var start = new Date('November 27, 2021'); // Дата создания сайта
	var end = new Date();
	var life = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
	document.getElementById("life_site").innerHTML = life + " " + "дня";
}

