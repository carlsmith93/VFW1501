//App Startfile

Ti.UI.setBackgroundColor("#000");

//Window Creation
var FirstWindow = Ti.UI.createWindow({
	backgroundColor: "#000" //color black
});

//View Creation

var FirstView = Ti.UI.createView({
	backgroundColor: "gray",
	top: 80,
	right: 20,
	left: 20,
	height: 280,
	borderRadius: 12
});

var TitleView = Ti.UI.createView({
	backgroundColor: "gray",
	height: Ti.UI.SIZE,
	top: 20,
	left: 20,
	right: 20,
	borderRadius: 12
});

//Buttons

var PreviousButton = Ti.UI.createView({
	backgroundColor: "green",
	height: 40,
	width: 90,
	bottom: 20,
	left: 20
});

var NextButton = Ti.UI.createView({
	backgroundColor: "green",
	height: 40,
	width: 90,
	bottom: 20,
	right: 20
});

//Label Creation

var TitleLabel = Ti.UI.createLabel({
	text: "Carl Smith's Top 10 Games!'"
});

var PreviousLabel = Ti.UI.createLabel({ //previous button
	text: "Previous"
});

var NextLabel = Ti.UI.createLabel({  //next button
	text: "Next"
});

var fetchfile = require("GamesData");
FirstWindow.open();
FirstWindow.add(FirstView , TitleView, PreviousButton, NextButton);
TitleView.add(TitleLabel);
PreviousButton.add(PreviousLabel);
NextButton.add(NextLabel);
