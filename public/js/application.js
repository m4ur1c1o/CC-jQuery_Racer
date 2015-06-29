$(document).ready(function() {
	// $("#racer").on("click", function(){
	// 	updatePlayerPosition('player_1');
	// });
	$(document).keypress(function(event){
		if(event.which == 106) {
			if (!$("td:last-of-type").hasClass("active")) {
				updatePlayerPosition('player_1');
			};
		};
		if(event.which == 100) {
			if (!$("td:last-of-type").hasClass("active")) {
				updatePlayerPosition('player_2');
			};
		};
			
	});
});

var updatePlayerPosition = function(player){
	// console.log(this);
	var element = $("#" + player + " .active");
	$(element).removeClass("active");
	$(element).next().addClass("active");
}

// ASCII 100 = d
// ASCII 106 = j