var InfoImages = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "InfoImages");
var InfoGallery = InfoImages.getDirectoryListing();


//Character Info JSON

var InfoJSON = ({
	Title: "Naruto Characters",
	Footer: "Character List for team 7",
	Characters: [
	{character: "Naruto", detail: "Naruto is a knuckleheaded ninja who is also the Jinchuuriki for a demon fox named Kurama.  Naruto's goal is to be the Hokage of Konoha.", photo: "InfoImages/" + InfoGallery[0]},
	{character: "Sakura", detail: "Sakura is Naruto's teammate for team 7, or later known as Team Kakashi.  Sakura has been trained by the current Hokage, Tsunade, to become a great medical ninja.", photo: "InfoImages/" + InfoGallery[1]},
	{character: "Sasuke", detail: "Sasuke was once part of team 7, however, he became a rouge ninja when he decided to leave the village to get revenge on his brother for destroying his family.  Sasuke is the last living member of the Uchiha Clan.  Sasuke Clan is known for having the Sharingan.", photo: "InfoImages/" + InfoGallery[2]},
	{character: "Kakashi", detail: "Kakashi is the leader of team 7.  Kakashi uses the sharingan that was given to him by his old teammate after an unfortunate incident occured.", photo: "InfoImages/" + InfoGallery[3]},
	{character: "Yamato", detail: "Yamato filled in for Kakashi when Kakashi got injured on a mission and could not lead the team in to the next mission.  Yamato is a wood style jutsu user.", photo: "InfoImages/" + InfoGallery[4]},
	{character: "Sai", detail: "Sai is a member of the root ANBU and put on Team 7 to help with a mission.  Sai Later is placed on Team 7 permanently.", photo: "InfoImages/" + InfoGallery[5]}
	]
});

//Info Button

var InfoButton = Ti.UI.createView({
	backgroundColor: "#55676a",
	height: 80,
	top: 80
});

var InfoLabel = Ti.UI.createLabel({
	text: "View Character Info",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 15}
});


//Function to Pull Character Info

var PullCharInfo = function(CharSource){
	var InfoWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: CharSource.title,
		font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 20}
});
	var InfoText = Ti.UI.createLabel({
	text: CharSource.detail,
	left: 20,
	right: 20,
	top: 20
	});
	
	var charimg = Ti.UI.createImageView({
		image: CharSource.photo,
		bottom: 0,
		height: 300
	});
	InfoWindow.add(charimg, InfoText);
	Navigate.openWindow(InfoWindow);
};


//Function to Character Selection

var LoadTable = function(){
	var InfoBackground = Ti.UI.createWindow({
		title: "Naruto Info"
	});
	
	var InfoView = Ti.UI.createTableView({
});
	var InfoSection = Ti.UI.createTableViewSection({
		headerTitle: InfoJSON.Title,
		footerTitle: InfoJSON.Footer
	});
	for (i=0; i<InfoJSON.Characters.length;i++){
		var characterRow = Ti.UI.createTableViewRow({
			title: InfoJSON.Characters[i].character,
			detail: InfoJSON.Characters[i].detail,
			photo: InfoJSON.Characters[i].photo,
			hasChild: true,
			font: {fontFamily: "Verdana", fontSize: 15}
		});
		InfoSection.add(characterRow);
	}
	var viewSection = [InfoSection];

InfoBackground.add(InfoView);
InfoView.add(InfoSection);
InfoView.setData(viewSection);
InfoView.addEventListener("click", function(clickevent){
	PullCharInfo(clickevent.source);
});
Navigate.openWindow(InfoBackground);
};

InfoButton.add(InfoLabel);
Background.add(InfoButton);
InfoButton.addEventListener("click", LoadTable);

