var i = 0;

var txt = 'Imagine a world without technology... That\'d suck wouldn\'t it?'; /* The text */
var txt2 = '...Well that\'s the life in many countries - here\'s one';
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function(){
	typeWriter();

}
function typeWriter() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i) + '|';
    i++;

		if(txt.charAt(i)=='.'){
			setTimeout(typeWriter, speed);
		}
		else {
    	setTimeout(typeWriter, speed);
		}
  }
	else {
		i=0;

		setTimeout(typeWriter2(), 1000);
	}
}
function typeWriter2() {
	var item = document.getElementById("demo2").innerHTML;
	document.getElementById("demo2").innerHTML = item.substring(0, item.length-1);

	if (i < txt2.length) {
		document.getElementById("demo2").innerHTML += txt2.charAt(i) + '|';
		i++;

		if(txt2.charAt(i)=='.'){
			setTimeout(typeWriter2, speed);
		}
		else {
			setTimeout(typeWriter2, speed);
		}
	}
	else {
		setInterval(function(){
			var item2 = document.getElementById("demo2").innerHTML;
			document.getElementById("demo2").innerHTML = item2.substring(0, item.length-1);
			setTimeout(function(){document.getElementById("demo2").innerHTML += '|'}, 500);
		}, 1000)
		setTimeout(function() {document.getElementById("demo3").style.display = "block"}, 3000);
	}
}
