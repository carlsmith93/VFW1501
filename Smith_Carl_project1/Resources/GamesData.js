var Games = ["1. Halo 4","2. League of Legends","3. Destiny","4. Super Smash Brothers Wii U","5. Pokémon Omega Ruby","6. Dungeon Defenders", "7. Everquest 2", "8. World of Warfraft", "9. Diablo 3", "10. Naruto-Arena"];

var i = 0; //variable to control the listed game
	var IncrementList = function(){
			if(i===9){
				i=0;
				gamelist.text=Games[i];
			}
			else{
				i+=1;
				gamelist.text=Games[i];
			}

};
	var DecrementList = function(){
			if(i===0){
				i=9;
				gamelist.text=Games[i];
			}
			else{
				i-=1;
				gamelist.text=Games[i];
			}
		
};

var gamelist = Ti.UI.createLabel({
	text: Games[i],
});



//Event Listeners

NextButton.addEventListener("click", IncrementList);
PreviousButton.addEventListener("click", DecrementList);

//display
FirstView.add(gamelist);
