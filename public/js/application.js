$(document).ready(function() {
	// $("#racer").on("click", function(){
	// 	updatePlayerPosition('player_1');
	// });
	
	$("#start").on("click", function(){
		resetPlayerPosition('player_1');
		resetPlayerPosition('player_2');
		$("#number").text(3);
		setTimeout(function(){ 
			$("#number").text(2);
		}, 1000);
		setTimeout(function(){ 
			$("#number").text(1);
		}, 2000);
		setTimeout(function(){ 
			$("#number").text("GO!!!");
			var time_start = $.now();
			$(document).keypress(function(event){
				if(event.which == 106) {
					if (!$("td:last-of-type").hasClass("active")) {
						updatePlayerPosition('player_1');
						if ($("td:last-of-type").hasClass("active")) {
							var time_end = $.now();
							$("#winner").text('Player 1 WON in ' + (time_end - time_start)/1000 + ' seconds.');
							$(document).unbind("keypress");
						};
					};
				};
				if(event.which == 100) {
					if (!$("td:last-of-type").hasClass("active")) {
						updatePlayerPosition('player_2');
						if ($("td:last-of-type").hasClass("active")) {
							var time_end = $.now();
							$("#winner").text('Player 2 WON in ' + (time_end - time_start)/1000 + ' seconds.');
							$(document).unbind("keypress");
						};
					};
				};	
			});
		}, 3000);
	});
});

var updatePlayerPosition = function(player){
	// console.log(this);
	var element = $("#" + player + " .active");
	element.removeClass("active");
	element.next().addClass("active");
}

var resetPlayerPosition = function(player){
	var element = $("#" + player);
	element.find("td").removeClass("active");
	element.find("td:nth-child(2)").addClass("active");
}

var timer = function(){
	var time = setTimeout(startTime, 1000);
}

var startTime = function(){

}

// Instructions to play
// ASCII 100 = d
// ASCII 106 = j