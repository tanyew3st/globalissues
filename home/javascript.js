var i = 0;

var txt = 'Imagine a world without internet, an understanding or education in technology, or the... access to technology. That world may look a bit like this...'; /* The text */

var orThis = 'Or this';
var randomCrap = 'This study contributes to characterization of satellite precipitation error which is fundamental to develop uncertainty models and bias reduction algorithms. Systematic and random error components of several satellite precipitation products are investigated over different seasons, thresholds and temporal accumulations. The analyses show that the spatial distribution of systematic error has similar patterns for all precipitation products. However, the systematic (random) error of daily accumulations is significantly less (more) than that of high resolution 3-hr data. One should note that the systematic biases of satellite precipitation are distinctively different in the summer and winter. The systematic (random) error is remarkably higher (lower) during the winter. Furthermore, the systematic error seems to be proportional to the rain rate magnitude. The findings of this study highlight that bias removal methods should take into account the spatiotemporal characterist';


var txt2 = 'spacebaConfused?... Basically, what I\'m trying to show you is that life without technology would be painful...^ The blue screen represents life in technology with no education, the white represents one with limited access, and the black is when you don\t even have technology...^ That sucks doesn\'t it?... Well, unfortunately, that\'s the life in many countries - here\'s one';
var speed = 75; /* The speed/duration of the effect in milliseconds */

window.onload = function(){
	alert('press Fn and F11 for optimal viewing experience');
	typeWriter();

}

function randomText() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);

	if (i < randomCrap.length) {
		document.getElementById("demo").innerHTML += randomCrap.charAt(i) + '|';
		i++;

	 setTimeout(randomText, 1);

	}
}
function typeWriter() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i) + '|';
    i++;

		if(txt.charAt(i)=='.'){
			setTimeout(typeWriter, 300);
		}
		else {
    	setTimeout(typeWriter, speed);
		}
  }
	else {
		setTimeout(function() {
			document.getElementById('demo').innerHTML = ' ';
			document.getElementById('demo').style.fontSize = 'small';

			document.body.style.backgroundColor = "blue";
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			i=0;
			randomText();
			setTimeout(function() {
				i=0;
				document.getElementById('demo').style.fontSize = '2em';

				document.getElementById('demo').innerHTML = ' ';
				document.body.style.backgroundColor = 'white';
				orThisFunction();

			}, 5000);


		}, 5000);


		i=0;

		//setTimeout(typeWriter2(), 1000);
	}
}
var orThisCount = 0;
function orThisFunction() {
	console.log('in the or this function');
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);

  if (i < orThis.length) {
    document.getElementById("demo").innerHTML += orThis.charAt(i) + '|';
    i++;

		if(orThis.charAt(i)=='.'){
			setTimeout(orThisFunction, 300);
		}
		else {
    	setTimeout(orThisFunction, speed);
		}
  }
	else {
		if(orThisCount === 0){
			i=0;
			document.getElementById('demo').innerHTML =' ';
			setTimeout(function() {
				orThisCount++;
				orThisFunction();
			}, 5000);
		} else {
			document.body.style.backgroundColor = 'black';
			setTimeout(function() {
				document.getElementById('demo').innerHTML = " ";
				document.body.style.backgroundColor = 'white';
				typeWriter2();
			}, 5000)
	}
	}
}

function typeWriter2() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);

	if (i < txt2.length) {
		document.getElementById("demo").innerHTML += txt2.charAt(i) + '|';
		i++;

		if(txt2.charAt(i)=='.'){
			setTimeout(typeWriter2, 300);
		}
		else if(txt2.charAt(i)=='^'){
			document.getElementById("demo").innerHTML = "";
			i+=2;
			setTimeout(typeWriter2, speed);
		}
		else {
			setTimeout(typeWriter2, speed);
		}
	}
	else {
		setInterval(function(){
			var item2 = document.getElementById("demo").innerHTML;
			document.getElementById("demo").innerHTML = item2.substring(0, item.length-1);
			setTimeout(function(){document.getElementById("demo").innerHTML += '|'}, 500);
		}, 1000)
		setTimeout(function() {document.getElementById("demo3").style.display = "block"}, 3000);
	}
}
