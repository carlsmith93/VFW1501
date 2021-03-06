//JSON

var DataJSON = ({
		Teams: ({
			TeamTitle: "FTG Teams", 
			TeamFooter:"List of teams in FTG" ,
			TeamList: [
			{title: "Moderating Team", Description: "The moderators are the group who make sure that our forums are free of profanity and make the FTG forums better for everyone else."},
			{title: "Activities Team", Description: "The activies team works hard to make sure that you are having fun in FTG.  They schedule tournaments as well as who you will battle every thursday."},
			{title: "Broad/Com Team", Description: "The broad/Com Team is a team dedicated to creating videos showing the fun we all have in FTG.  They also create gameplay videos."	}
			]
			}),
			
		Divisions: ({
			DivTitle: "FTG Divisions",
			DivFooter: "List of Div's in FTG",
			DivList: [
			{title: "Maximum Chaos", description: "Maximum Chaos or MC for short is the first division Created for the Xbox one who is run by FTG Enders Foul as well as FTG BMF"},
			{title: "Fatal Syndicate", description: "FS is a division on the Xbox 360 that is currently being run by FTG Lavelent."},
			{title: "Absolute Destruction", description: "Absolute Destruction is the newest squad on the Xbox 360 and is currently being run by FTG Firestorm"}
			]
		})
});

//Functions

var PullDivInfo = function(){
	var InfoWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: this.title,
		font: {fontWeight: "Bold", fontFamily: "Verdana", fontSize: 20}
});
	var DivDetailLabel = Ti.UI.createLabel({
	text: this.detail,
	left: 20,
	right: 20,
	top: 20
	});

	InfoWindow.add(DivDetailLabel);
	Navigate.openWindow(InfoWindow);
};

var PullTeamInfo = function(){
	
	var InfoWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: this.title
	});
	
	var TeamDetailLabel = Ti.UI.createLabel({
	text: this.detail,
	left: 20,
	right: 20,
	top: 20
	});

InfoWindow.add(TeamDetailLabel);
Navigate.openWindow(InfoWindow);
};





//Table View
var NewDisplay = Ti.UI.createTableView({  //Create View
});

//Table Sections

var TeamSection = Ti.UI.createTableViewSection({  //Teams Section
	headerTitle: DataJSON.Teams.TeamTitle,
	footerTitle: DataJSON.Teams.TeamFooter
});

var DivSection = Ti.UI.createTableViewSection({
	headerTitle: DataJSON.Divisions.DivTitle,
	footerTitle: DataJSON.Divisions.DivFooter
});

//Loop Through Array

for(var i=0, j = DataJSON.Teams.TeamList.length;i<j;i++){
	var TeamsRow = Ti.UI.createTableViewRow({
		title: DataJSON.Teams.TeamList[i].title,
		detail: DataJSON.Teams.TeamList[i].Description,
		hasChild: true,
		font: {fontFamily: "Verdana", fontSize: 15}
	});
	TeamSection.add(TeamsRow);
	TeamsRow.addEventListener("click", PullTeamInfo);
}


for(var l=0, m = DataJSON.Divisions.DivList.length;l<m;l++){
	var DivRow = Ti.UI.createTableViewRow({
		title: DataJSON.Divisions.DivList[l].title,
		detail: DataJSON.Divisions.DivList[l].description,
		hasChild: true,
		font: {fontFamily: "Verdana", fontSize: 15}
	});
	DivSection.add(DivRow);
	DivRow.addEventListener("click", PullDivInfo);
}

//View Section

var ViewSections = [TeamSection, DivSection];

if(Ti.Platform.name === "iPhone OS"){
	NewDisplay.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

NewDisplay.setData(ViewSections);
NewDisplay.add(TeamSection);
Background.add(NewDisplay);