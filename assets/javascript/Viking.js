$(document).ready(function() {
/*var $ = function(id) 
{ 
return document.getElementById(id); 
};*/

var lego = "<button class = 'character' id = 'charLego'><img src = './assets/images/lego.jpg' alt='Lego Viking'></button>";
var leif = "<button class = 'character' id = 'charLeif'><img src = './assets/images/leif.jpg' alt='Leif Viking'>";
var thorvald = "<button class = 'character' id = 'charThorvald'><img src = './assets/images/thorvald.jpg' alt='Thorvald Viking'></button>";
var ragnar = "<button class = 'character' id = 'charRagnar'><img src = './assets/images/ragnar.jpg' alt='Ragnar Viking'></button>";

function bullpen() {
	$("#bullpen1").html(lego);
	$("#bullpen2").html(leif);
	$("#bullpen3").html(thorvald);
	$("#bullpen4").html(ragnar);
}
bullpen();

$(".character").on("click", function() {
	var clickedParent = $(this).parent().attr('id');
	console.log(clickedParent);
	$("#chosenViking").html($("#clickedParent").html);

})

})