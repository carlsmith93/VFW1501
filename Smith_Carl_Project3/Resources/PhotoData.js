//Phone Size Variables

var phoneheight = Ti.Platform.displayCaps.platformHeight;
var phoneWidth = Ti.Platform.displayCaps.platformWidth;
ThumbnailSize = phoneWidth/4 - 10;

//Load Images
var ImageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
var Images = ImageFolder.getDirectoryListing();
console.log(Images);

//Start view and Label
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


//Info loaded after clicking start

var ScrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: phoneWidth
	});


for (i = 0; i < Images.length; i++){  //loop that creates the thumbnails
	var ThumbnailView = Ti.UI.createImageView({
	image: "Images/" + Images[i],
	Width: ThumbnailSize,
	height: ThumbnailSize,
	top: 10,
	left: 5,
	right: 5
	});
	ScrollView.add(ThumbnailView);

	var FullImage = function(){  //Creates Views for full Images

	var FullView = Ti.UI.createImageView({
		image: this.image,
	});
		var ImageBackground = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: Images.title
	});
	ImageBackground.add(FullView);
	Navigate.openWindow(ImageBackground);

};
ThumbnailView.addEventListener("click", FullImage);
	
};


var ShowThumbnails = function(){  //Creates window for thumbnails
		
	
	var ThumbnailWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: "Game Photo Thumbnails"
	});
	
	ThumbnailWindow.add(ScrollView);
	Navigate.openWindow(ThumbnailWindow);
};


	
Background.add(StartButton);
StartButton.add(ButtonLabel);
StartButton.addEventListener("click", ShowThumbnails);

