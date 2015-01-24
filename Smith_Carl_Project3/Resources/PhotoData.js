var phoneheight = Ti.Platform.displayCaps.platformHeight;
var phoneWidth = Ti.Platform.displayCaps.platformWidth;

var Thumbnails = [
{image: "Images/brick.jpeg" , title: "Brick"},
{image: "Images/cl4p-tp.jpeg", title: "Cl4p-tp"},
{image: "Images/cortana.jpeg", title: "Cortana"},
{image: "Images/destinyguardians.jpeg", title: "Destiny Guardians Together"},
{image: "Images/destinyhunter.jpeg", title: "Destiny Hunter"},
{image: "Images/destinyspeaker.jpeg", title: "Destiny Speaker"},
{image: "images/destinytitan.jpeg", title: "Destiny Titan"},
{image: "Images/destingwarlock.jpeg", title: "Destiny Warlock"},
];


var SecondWindow = Ti.UI.createWindow({
	BackgroundColor: "black"
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

var pictureview = Ti.UI.createScrollView({
	top: 0,
	height: phoneheight - 20,
	backgroundColor: "gray"
});
var imageview = Ti.UI.createImageView({
	image: Thumbnails[3].image
});

StartButton.add(ButtonLabel);
Background.add(imageview);
SecondWindow.add(pictureview);
