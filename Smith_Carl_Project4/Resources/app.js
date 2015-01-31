//opening background
Titanium.UI.setBackgroundColor("black");

//Start Window
var Background = Ti.UI.createWindow({
	backgroundColor: "#000000",
	title: "Naruto",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 20}
});


var Navigate = Ti.UI.iOS.createNavigationWindow({
	window: Background
	
});



Navigate.open();
var fetchGallery = require("Photogallery");
var fetchInfo = require("NarutoInfo");
var fetchCustom = require("Custom");
