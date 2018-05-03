var problems_text = "here is a bunch of random text about problems here here is"
+ "a bunch of random text about problems is a bunch of random text about problems" +
 "here is a bunch of random text about problems"
 + "a bunch of random text about problems is a bunch of random text about problems" +
  "here is a bunch of random text about problems"
  + "a bunch of random text about problems is a bunch of random text about problems" +
   "here is a bunch of random text about problems"

var solutions_text = "here is a bunch of random text about problems here here is"
+ "a bunch of random text about ]] is a bunch of random text about problems" +
 "here is a bunch of random text about problems"
 + "a bunch of random text about problems is a bunch of random text about problems" +
  "here is a bunch of random text about problems"
  + "a bunch of random text about problems is a bunch of random text about problems" +
   "here is a bunch of random text about problems"

var why_text = "here is a bunch of random text about problems here here is"
   + "a bunch of random text about problems is a bunch of random text about problems" +
    "here is a bunch of random text about problems"
    + "a bunch of random text about asfdsgahlsjgdsaf;lasjdfdfasdfandom text about problems"
     + "a bunch of random text about problems is a bunch of random text about problems" +
      "here is a bunch of random text about problems"

var catherine = 0;

function problems(){
  document.getElementById("dynamic-content").innerHTML = problems_text;
}
function solutions(){
  document.getElementById("dynamic-content").innerHTML = solutions_text;
}
function why(){
  document.getElementById("dynamic-content").innerHTML = why_text;
}

var i = 0;

var txt = 'These next few webpages will show you the power of the access to technology through first hand stories, as if you are logging on to a computer in a different country. These countries will show you how their country is developing and what happens when their population lives without  access to technology'; /* The text */
var txt2 = 'Here is a little preview into the life there';
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function(){
	typeWriter();

}

function typeWriter() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);
  count = 0;
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i) + '|';
    i++;

		if(txt.charAt(i)=='.'){
			setTimeout(typeWriter, 50);
		}
		else {
    	setTimeout(typeWriter, 50);
		}
  }
  else {
    removeWordAndAdd(9, 'the internet');
  }
}
function removeWordAndAdd(wordLength, reAddWord) {

  var a=0;
  var actualInterval = setInterval(function() {
    console.log("executing");
    var wordd = document.getElementById("demo").innerHTML;
    document.getElementById('demo').innerHTML = wordd.substring(0, wordd.length-2);
    document.getElementById('demo').innerHTML += '|';
    a++
    if(a >= wordLength){
      console.log('cleared interval');
      window.clearInterval(actualInterval);
      i=0;
      tyype();

    }
      function tyype() {
      var item = document.getElementById("demo").innerHTML;
    	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);
      console.log(reAddWord.length);


        if (i < reAddWord.length) {
          console.log('inside');
          document.getElementById("demo").innerHTML += reAddWord.charAt(i) + '|';
          i++;


          setTimeout(tyype, 50);
        }

        else {

          if(catherine === 0){
            catherine = catherine + 1;
            removeWordAndAdd(11 ,'proper health care');
          }
          else if(catherine === 1){
            catherine = catherine + 1;
            removeWordAndAdd(17, 'jobs');
          }
          else if(catherine === 2){
            catherine = catherine + 1;
            removeWordAndAdd(3, 'trade networks');
          }
          else if(catherine === 3){
            catherine = catherine + 1;
            removeWordAndAdd(13, 'proper education');
          }
          else if(catherine === 4){
            catherine = catherine + 1;
            removeWordAndAdd(25, 'the ability to lead a good life.');
          }

        }


    //  i=0;
    //  setTimeout(typeWriter2(), 1000);

    }

  }, 200)
}
/**function typeWriter() {
	var item = document.getElementById("demo").innerHTML;
	document.getElementById("demo").innerHTML = item.substring(0, item.length-1);
  count = 0;
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
    if(count != 5){
      console.log('executing');
      var word = "";
      if(count === 0){
        console.log('executing');
        word = 'technology';
      }
      var a = 0;
      var actualInterval = setInterval(function() {
        console.log("executing");
        var wordd = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = item.substring(0, wordd.length-2);
        document.getElementById("demo").innerHTML += '|';
        a++
        if(a >= word.length){
          window.clearInterval(actualInterval);
        //  i=0;
        //  setTimeout(typeWriter2(), 1000);
          for()
        }
      }, 300);


    }
		i=0;

	}
}**/
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
