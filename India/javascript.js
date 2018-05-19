var problems_text = "India claims that it has some of the best tech and IT companies in the world! Yet, according to Pew Research Center, only 22% of adults in India have access to the internet. Additionally, out of the total population, according to World Bank, 10.1 percent of the population have access to the internet. Why is this?" +
  "<ul>"+
    "<li>Well, India simply lacks the infrastructure to provide to such a big population - fiber optic links and servers needed to expand are very hard to implement and are quite scarce.</li>" +
    "<li>Affordability: Accessing the internet is not as cheap as America makes it. Adding to that is the fact that 75% of India earns less than 74 dollars per month (CNN)</li>"+
    "<li>Awareness: Many Indians lack a basic understanding of the Internet: they don't know much about it and can barely use it. The internet is learned through connections and observations. When you see others using Facebook or Twitter, etc., you learn Twitter and Facebook. But when you don't see anyone using these technologies, it's very difficult to learn. Similar to learning a new language, education in the internet is just not easy.</li>"+
  "</ul>"

var solutions_text = "Companies and Startups are helping grow awareness and educate citizens in India about technology"+
"<ul>"+
  "<li>The Internet Society is an organization trying to help local craftspeople and ongoing workshops, in hopes of bridging the digital divide. The Bangalore part of the Internet Society Community is training everyone from glass cutters to tailors to furniture makers, etc. They are doing helping them download pictures, use e-mail, work with video conferencing, use Excel and Word, and market their products on Facebook, YouTube, and Twitter.</li>"+
  "<li>A company called Cramnet is trying to empower Indians caught into the wrong side of the Digital Divide. What they have realized is that the access to technology is not a choice, it is an unfair punishment. Simply because of luck and unforeseen circumstances, some are born with technology and some are born without. Cramnet Wireless Communications uses unused spectrum to provide wireless internet free of charge to the \"digitally disenfranchised\" (Raghavendra Sathyanarayana, Wireless " + "Commincations Engineer) in India</li>"+
  "<li>The Digital Empowerment Foundation in Delhi, India has been installing wireless networks in remote tribal regions using wasted spectrum. The man who founded this organization resigned from his position as CEO of a software company after seeing that \"The entire country could leapfrog the developmental cycle if they were to forget about racing for the industrial revolution and aspire for an information revolutions instead\" (Osama Manzar, founder of DEF) This is a powerful quote by the founder because it really is important to note that countries like India need to focus on breaching the digital divide over industrial. As seen through successful countries such as Iceland, we are no in the Information stage, no longer needing industrial advancements.</li>"+
  "<li>Companies like the DEF are putting in Solar-Enabled supplying nodes (way to get wireless connection). However, most of the time this much power is not needed - as one researcher mentioned, a back-up is sufficient because no one in remote areas really wants a 24/7 service.</li>"+
  "<li>When the CEO was asked whether clean water and electricity should be given priority over this seemingly trivial pursuit, he said<blockquote style='font-size:2em'> \"Food, water, and electricity are also a priority. But they have not been getting it for several centuries and if they do not join the information bandwagon now they will continue to suffer and be exploited. Being part of the digital media, they can at least share their grievances.\"</blockquote> If India is not able to figure out their access to technology now, they will never figure it out. Similarly, had they focused all their efforts on electricity when it was becoming essential, they would not have the problem of energy that they have today. And another part is that <blockquote style='font-size:1.5em'>\"Never in the history of India have they got a chance to be an equal part of information creation.\"</blockquote></li>"+
"<ul>"
var why_text = "Here are some stories" +
"<ul>"+
    "<li>\"Mr Kemperaj from Hennur in north Bangalore, India makes lamp shades and pillowcases. He used to travel more than 70km (43.5 miles) to get a sample of work approved by his vendor. Now he sits in front of his computer, send the photos by email and surfs the Net to research new designs and discover new sales routes such as eBay\" (CNN)</li>"+
    "<li>Using grants from the International Society, groups of Artisans in Bangalore are now replacing their archaic paper-based organizing tools with software like Excel and Word</li>"+
    "<li>Wireless mesh networks have been installed by the DEF in a town called Chanderi, a town in Madhya Pradesh, where 60 percent of the population earn a living from handloom weaving. At Tura, in the northeast state Meghalaya, where different tribes live, the Digital Empowerment Foundation use technology to deliver video conferencing to educate tribal children</li>"+

"<ul>";
var catherine = 0;

function problems(){
  document.getElementById("dynamic-content").innerHTML = problems_text;
  document.getElementById("continue").style.display="block";
}
function solutions(){
  document.getElementById("dynamic-content").innerHTML = solutions_text;
  document.getElementById("continue").style.display="block";

}
function why(){
  document.getElementById("dynamic-content").innerHTML = why_text;
  document.getElementById("continue").style.display="block";

}

var i = 0;

var txt = 'These next few webpages will show you the power of the access to technology through first hand stories, as if you are logging on to a computer in a different country.^ These pages will show you how their country is developing and what happens when...^ their population lives without  access to technology'; /* The text */
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
			setTimeout(typeWriter, 300);
		}
    else if(txt.charAt(i)=='^'){
      document.getElementById('demo').innerHTML = "";
      i+=2;
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
            document.getElementById('paragraph').style.display='block';
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
