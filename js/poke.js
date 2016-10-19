$(document).ready(function(){
	// Definir Variables
	// Charmander
	var charmander = $('#charmander');
	var vidaCharmander = $('.hp-charmander').val();
	// Squirtle
	var squirtle = $('#squirtle');
	var atkSquirtle = $('.ataque-squir').val();
	
	charmander.submit(function(){
		event.preventDefault();
		// Obtener la vida de Squirtle
		var vidaSquirtle = $('.hp-squirtle').val();
;		console.log(parseInt(vidaSquirtle));
		
		// Obtener Ataque de charmander
		var atkCharmander = $('#ataque-char').val();
		console.log(parseInt(atkCharmander));
	});
	
});