//opening background
Titanium.UI.setBackgroundColor('black');

//Start Window
var Background = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Gaming Photos",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 20}
});


var Navigate = Ti.UI.iOS.createNavigationWindow({
	window: Background
});

var StartButton = Ti.UI.createView({
	backgroundColor: "gray",
	left: 50,
	right: 50,
	height: 50
});

var ButtonLabel = Ti.UI.createLabel({
	text: "Load Pictures",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 15}
	
});

StartButton.add(ButtonLabel);
Background.add(StartButton);
Navigate.open();


var fetchfile = require("PhotoData");
