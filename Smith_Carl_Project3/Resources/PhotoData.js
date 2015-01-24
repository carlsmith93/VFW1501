var phoneheight = Ti.Platform.displayCaps.platformHeight;
var phoneWidth = Ti.Platform.displayCaps.platformWidth;
ThumbnailSize = phoneWidth/4 - 10;

var Thumbnails = [
{image: "Images/brick.jpeg" , title: "Brick"},
{image: "Images/cl4p-tp.jpeg", title: "Cl4p-tp"},
{image: "Images/cortana.jpeg", title: "Cortana"},
{image: "Images/destinyguardians.jpeg", title: "Destiny Guardians Together"},
{image: "Images/destinyhunter.jpeg", title: "Destiny Hunter"},
{image: "Images/destinyspeaker.jpeg", title: "Destiny Speaker"},
{image: "Images/destinytitan.jpeg", title: "Destiny Titan"},
{image: "Images/destinywarlock.jpeg", title: "Destiny Warlock"},
{image: "Images/ganondorf.jpeg", title: "Ganondorf"},
{image: "Images/haloarbitar.jpg", title: "Aribter"},
{image: "Images/haloflood.jpeg", title: "Flood"},
{image: "Images/handsomjack.jpeg", title: "Handsom Jack"},
{image: "Images/kreig.jpeg", title: "Kreig"},
{image: "Images/lightning.jpeg", title: "Lightning"},
{image: "Images/lilith.jpeg", title: "Lilith"},
{image: "Images/link.jpeg", title: "Link"},
{image: "Images/luigi.jpeg", title: "Luigi"},
{image: "Images/mario.png", title: "Mario"},
{image: "Images/masterchief.jpeg", title: "Master Chief"},
{image: "Images/maya.jpeg", title: "Maya"},
{image: "Images/mordecai.jpeg", title: "Mordecai"},
{image: "Images/peach.png", title: "Peach"},
{image: "Images/sazh.jpeg", title: "Sazh"},
{image: "Images/sheik.jpeg", title: "Sheik"},
{image: "Images/snow.jpeg", title: "Snow"},
{image: "Images/tinytina.jpeg", title: "Tiny Tina" },
{image: "Images/toad.jpeg", title: "Toad"},
{image: "Images/vanille.jpeg", title: "Vanille"},
{image: "Images/yoshi.jpeg", title: "Yoshi"},
{image: "Images/zelda.jpeg", title: "Zelda"}
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


var ShowThumbnails = function(){
	var ThumbnailWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: "Game Photo Thumbnails"
	});
	var ScrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: phoneWidth
	});
	for (i = 0; i < Thumbnails.length; i++){
		var ThumbnailView = Ti.UI.createImageView({
			image: Thumbnails[i].image,
			Width: ThumbnailSize,
			height: ThumbnailSize,
			top: 10,
			left: 5,
			right: 5
		});
		ScrollView.add(ThumbnailView);
	};
	ThumbnailWindow.add(ScrollView);
	Navigate.openWindow(ThumbnailWindow);
	

};

	
Background.add(StartButton);
StartButton.add(ButtonLabel);
StartButton.addEventListener("click", ShowThumbnails);

