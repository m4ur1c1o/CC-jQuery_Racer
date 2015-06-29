$(document).ready(function() {
	// var elem = "" + updatePlayerPosition('player_1') + " .active";
	// console.log(elem);
	// $(elem).css("background-color", "green");
	$("#racer").on("click", function(){
		updatePlayerPosition('player_1');
	});



	// updatePlayerPosition('player_1');
});

var updatePlayerPosition = function(player){
	console.log(this);
	var element = $("#" + player + " .active");
	$(element).removeClass("active");
	$(element).next().addClass("active");
}
