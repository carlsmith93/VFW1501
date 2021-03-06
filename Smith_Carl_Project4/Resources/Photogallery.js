//Create Photo Array

var LoadImages = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Photogallery");
var Gallery = LoadImages.getDirectoryListing();



//Button
var gallerybutton = Ti.UI.createView({
	top: 0,
	height:80,
	backgroundColor: "#303f42"
});

var gallerylabel = Ti.UI.createLabel({
	text: "View Image Gallery",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 15}
});

//Photo Load Function

var LoadImage = function(){
	var Imagebackground = Ti.UI.createWindow({
		backgroundColor: "black",
		title: "Naruto Images"
	});
	var i = 0;
	var RandImage = Math.random();
		if (RandImage <= .10){
			i = 0;
		}
		else if (RandImage <= .20){
			i = 1;
		}
		else if (RandImage <= .30){
			i = 2;
		}
		else if (RandImage <= .40){
			i = 3;
		}
		else if (RandImage <= .50){
			i = 4;
		}
		else if (RandImage <= .60){
			i = 5;
		}
		else if (RandImage <= .70){
			i = 6;
		}
		else if (RandImage <= .80){
			i = 7;
		}
		else if (RandImage <= .90){
			i = 8;
		}
		else{
			i = 9;
		};
	var ImageLayer = Ti.UI.createImageView({
		bottom: 0,
		image: "Photogallery/" + Gallery[i]
	});

		var NextPicture = Ti.UI.createView({
		backgroundColor: "gray",
		height: 40,
		top: 0
		});
		
		var NextLabel = Ti.UI.createLabel({
			text: "View another picture!"
		});

	var reload = function(){
	Navigate.closeWindow(Imagebackground);
	Imagebackground.addEventListener("close", LoadImage);
	};
NextPicture.add(NextLabel);
NextPicture.addEventListener("click", reload);
Imagebackground.add(ImageLayer,NextPicture);
Navigate.openWindow(Imagebackground);
};



gallerybutton.add(gallerylabel);
Background.add(gallerybutton);
gallerybutton.addEventListener("click",LoadImage);
