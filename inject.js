function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
replaceText("Personnel are reminded that certain files within this hub may be subject to various classifications, and that verified credentials may be necessary to access those files.", "Welcome. You’ve been chosen to Secure. Contain. and Protect. You’ve been assigned to investigate the Lavender Town Syndrome.  Investigate related SCPs (SERIES VI) to the best of your abilities. There are few among many that will lead you to the correct destination to conduct your investigation. Happy hunting")
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
	setTimeout(function(){alert("Agent, You can utilize Google for KEYWORD CLUES from here on out. Proceed?")}, 8000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/foundation-tales")){
	setTimeout(function(){alert("Agent, go to the wiki's homepage to start.")}, 10000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com")){
replaceText("Coming this October, a terrifying triple feature looms on the horizon! Check out NIGHTMAREFEST, the celebration of everything that goes bump in the night.", "Coming this October, something truly terrifying, a reminder of the past! Check out LAVENDER TOWN, a truly terrifying CREEPYPASTA.")
}

if(checkWebAddress("https://creepypasta.fandom.com/wiki/Lavender_Town_Syndrome")){
replaceText("There is also the said Beta Version of Lavender Town. It is said that the Beta Version of Pocket Monsters was released to some kids to test the games. This is the video of the Beta Version of Lavender Town:", "As a Field Agent, you have to see it for yourself. Watch. You must last at least 30 seconds.")
	setTimeout(function(){alert("Return to the homepage and CATCH THE YELLOW RAT in SERIES VI")}, 120000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5009")){
	setTimeout(function(){alert("LEAVE NOW")}, 5000)
}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5009")){
	setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)}

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5278")){
	setTimeout(function(){alert("LEAVE NOW")}, 10000)
}

setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 8000)


if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5383")){
	setTimeout(function(){alert("LEAVE NOW")}, 5000)
}

setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 7000)

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5812")){
	setTimeout(function(){alert("LEAVE NOW")}, 5000)
}

setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://scp-wiki.wikidot.com/scp-3930"
}, 7000)

if(checkWebAddress("https://scp-wiki.wikidot.com/scp-5254")){
	setTimeout(function(){alert("Good job Agent, you've survived your first test. Don't let it get to your head. Keep going.")}, 9000)
}

setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://lavender-town-scp-trial.squarespace.com"
}, 13000)

if(checkWebAddress("https://lavender-town-scp-trial.squarespace.com")){
	setTimeout(function(){alert("Do you have the password? Don't forget that here at the SCP Foundation, titles are important, not just item numbers.")}, 4000)
}

if(checkWebAddress("https://lavender-town-scp-trial.squarespace.com")){
	setTimeout(function(){alert("Go back and check your last containment if you don't. [CASE SENSITIVE INFORMATION.] [SERIES VI.]")}, 8000)
}

if(checkWebAddress("https://gamejolt.com/games/escape-from-lavender-town/5007")){
	setTimeout(function(){alert("Okay, Field Agent, Proceed to your true test?")}, 6000)
}

if(checkWebAddress("https://gamejolt.com/games/escape-from-lavender-town/5007")){
	setTimeout(function(){alert("You have to download AND escape Lavender Town.")}, 7000)
}

