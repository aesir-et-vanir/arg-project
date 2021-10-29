function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
replaceText("Personnel are reminded that certain files within this hub may be subject to various classifications, and that verified credentials may be necessary to access those files.", "Welcome. You’ve been chosen to Secure. Contain. and Protect. You’ve been assigned to investigate the Lavender Town Syndrome.  Investigate related SCPs (SERIES VI) to the best of your abilities. There are few among many that will lead you to the correct destination to conduct your investigation. Happy hunting")
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
	setTimeout(function(){alert("Agent, You can utilize Google for KEYWORD CLUES from here on out. Proceed?")}, 10000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
	setTimeout(function(){alert("Agent, proceed to the SCP Foundation's 'Introduction Hub' page")}, 11000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-introduction-hub")){
	setTimeout(function(){alert("Agent, check out LAVENDER TOWN, a truly terrifying CREEPYPASTA.")}, 12000)
}

if(checkWebAddress("https://creepypasta.fandom.com/wiki/Lavender_Town_Syndrome")){
replaceText("There is also the said Beta Version of Lavender Town. It is said that the Beta Version of Pocket Monsters was released to some kids to test the games. This is the video of the Beta Version of Lavender Town:", "As a Field Agent, you have to see it for yourself. Watch. You must last at least 30 seconds.")
}

if(checkWebAddress("https://creepypasta.fandom.com/wiki/Lavender_Town_Syndrome")){
	setTimeout(function(){alert("Return to the homepage and CATCH THE YELLOW RAT in SERIES VI")}, 9000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5009")){
    setTimeout(function(){alert("LEAVE NOW")}, 6000)


setTimeout(function(){
    //chrome.runtime.sendMessage({timeUp: true})
    location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5278")){
    setTimeout(function(){alert("LEAVE NOW")}, 6000)

setTimeout(function(){
    //chrome.runtime.sendMessage({timeUp: true})
    location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5383")){
    setTimeout(function(){alert("LEAVE NOW")}, 6000)

setTimeout(function(){
    //chrome.runtime.sendMessage({timeUp: true})
    location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5812")){
    setTimeout(function(){alert("LEAVE NOW")}, 6000)

setTimeout(function(){
    //chrome.runtime.sendMessage({timeUp: true})
    location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)
}
if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5254")){
    setTimeout(function(){alert("Good job Agent, you've survived your first test. Don't let it get to your head. Hold steady now.")}, 9000)

setTimeout(function(){
    //chrome.runtime.sendMessage({timeUp: true})
    location.href = "https://lavender-town-scp-trial.squarespace.com"
}, 10000)
}

if(checkWebAddress("https://lavender-town-scp-trial.squarespace.com")){
	setTimeout(function(){alert("Do you have the password? Don't forget that here at the SCP Foundation, titles are important, not just item numbers.")}, 4000)
}

if(checkWebAddress("https://lavender-town-scp-trial.squarespace.com")){
	setTimeout(function(){alert("Go back and check your last containment if you don't. [CASE SENSITIVE INFORMATION.] [SERIES VI.]")}, 7000)
}

if(checkWebAddress("https://gamejolt.com/games/escape-from-lavender-town/5007")){
	setTimeout(function(){alert("Okay, Field Agent, Proceed to your true test?")}, 6000)
}

if(checkWebAddress("https://gamejolt.com/games/escape-from-lavender-town/5007")){
	setTimeout(function(){alert("You have to download AND escape Lavender Town.")}, 7000)
}

function replaceText(findWord, replaceWord){
	var textnodes = getTextNodes();
	var findRE = new RegExp(findWord, "gi")
	for (var i = 0; i < textnodes.length; i++) {
	  var text = textnodes[i].nodeValue;
	  textnodes[i].nodeValue = text.replace(findRE, replaceWord);
	}
   }
	function getTextNodes() {
	// get all html elements
	var elements = document.querySelectorAll("body, body *");
	var results = [];
   
   
	//loop through the elements children nodes
	for (var i = 0; i < elements.length; i++) {
	  var child = elements[i].childNodes[0];
   
	  // grab everything that's a textNode (nodeType is "3")
	  if (elements[i].hasChildNodes() && child.nodeType == 3) {
		results.push(child);
	  }
	}
   
	return results;
   }

