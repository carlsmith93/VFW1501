
//opening background
Titanium.UI.setBackgroundColor('black');

//Start Window
var Background = Ti.UI.createWindow({
	backgroundColor: "black"
});

//Start Main Title View
var StartTitle = Ti.UI.createView({
	height: 70,
	top: 0,
	backgroundColor: "white"
});

//Title View Label

var TitleLabel = Ti.UI.createLabel({
	text: "Full Throttle Gaming",
	font: {fontFamily: "Comic Sans", fontWeight: "bold", fontSize: 20}
});

Background.open();
Background.add(StartTitle);
StartTitle.add(TitleLabel);

var fetchfile = require("FTGInfo");
