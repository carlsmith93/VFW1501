//Create Custom Button

var CustomButton = Ti.UI.createView({
	backgroundColor: "#6c7a7d",
	height: 80,
	top: 160
});

var CustomLabel = Ti.UI.createLabel({
	text: "Custom Page",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 15}
});


var PlayButton = Ti.UI.createButton({
	height: 50,
	title: "Play Theme"
});

//Audio player

var Sasuke = Ti.Media.createSound({
	url: "Audio/SasukeTheme.mp3",
});

var Naruto = Ti.Media.createSound({
	url: "Audio/NarutoTheme.mp3"
});

//Audio Directions

var Instructions = Ti.UI.createLabel({
	text: "This switch will allow you to play audio! If the switch is on, it will play Sasuke's theme song, if the switch is off, it will play Naruto's theme song!  You can also click the switch again to stop audio.",
	font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 15},
	color: "white",
	top: 0
});

//Swith to determine audio played

var CharSwitch = Ti.UI.createSwitch({
	bottom: 0,
	value: true
});



//Music Playing Function

var playaudio = function(){
	if (CharSwitch.value === true){
		Sasuke.play();
		console.log(CharSwitch.value);
	}
	else if(CharSwitch.value === false){
		Naruto.play();
		console.log(CharSwitch.value);
	};

CharSwitch.addEventListener('change',function(e){
Sasuke.stop();
Naruto.stop();
});
};



CharSwitch.addEventListener('change',function(e){
});



//Open Custom Window
var OpenCustom = function(){
var CustWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Custom"
});
CustWindow.add(CharSwitch, PlayButton, Instructions);
Navigate.openWindow(CustWindow);
};


PlayButton.addEventListener("click", playaudio);
CustomButton.add(CustomLabel);
CustomButton.addEventListener("click",OpenCustom);
Background.add(CustomButton);
