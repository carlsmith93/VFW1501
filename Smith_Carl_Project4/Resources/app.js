//opening background
Titanium.UI.setBackgroundColor("black");

//Start Window
var Background = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Destiny",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 20}
});


var Navigate = Ti.UI.iOS.createNavigationWindow({
	window: Background
});



Navigate.open();
