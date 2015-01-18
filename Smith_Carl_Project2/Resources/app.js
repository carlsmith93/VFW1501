
//opening background
Titanium.UI.setBackgroundColor('black');

//Start Window
var Background = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Full Throttle Gaming"
});


var Navigate = Ti.UI.iOS.createNavigationWindow({
	window: Background
});

Navigate.open();


var fetchfile = require("FTGInfo");
