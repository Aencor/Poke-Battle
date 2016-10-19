$(document).ready(function(){
	// Definir Variables
	// Charmander
	var charmander = $('#charmander');
	// Squirtle
	var squirtle = $('#squirtle');
	
	// Ataque de Charmander
	charmander.submit(function(){
		event.preventDefault();
		// Obtener la vida de Squirtle
		var vidaSquirtle = $('.hp-squirtle').val();
;		// console.log(parseInt(vidaSquirtle));
		var vidaRestanteSquirtle = parseInt(vidaSquirtle);
		
		// Obtener Ataque de charmander
		var atkCharmander = $('#ataque-char').val();
// 		console.log(parseInt(atkCharmander));
		var atkUsado = parseInt(atkCharmander)
		
		// Atacar
		var imagenPoke = $('.poke-imgs-char');
		var ataque = vidaRestanteSquirtle - atkUsado;
// 		console.log(ataque);
		// Cambiar imagen
		imagenPoke.toggleClass('img-ataque');
		
		$('.hp-squirtle').val(ataque);
		setTimeout(function(){
			imagenPoke.toggleClass('img-ataque')
		}, 2000);
		// Deshabilitar ataque
		$('.attack-btn-charmander').attr('disabled', 'disabled');
		// Habilitar ataque
		$('.attack-btn-squirtle').removeAttr('disabled');
		
		if($('.hp-squirtle').val() <= 0){
			squirtle.hide();
			alert('Charmander Gana');
		}
	});
	
	// Ataque de Squirtle
	squirtle.submit(function(){
		event.preventDefault();
		// Obtener la vida de Squirtle
		var vidaCharmander = $('.hp-charmander').val();
		// console.log(parseInt(vidaCharmander));
		var vidaRestanteCharmander = parseInt(vidaCharmander);
		
		// Obtener Ataque de charmander
		var atkSquirtle = $('#ataque-squir').val();
// 		console.log(parseInt(atkCharmander));
		var atkUsado = parseInt(atkSquirtle)
		
		// Atacar
		var imagenPoke = $('.poke-imgs-squirtle');
		var ataque = vidaRestanteCharmander - atkUsado;
 		//console.log(ataque);
		// Cambiar imagen
		imagenPoke.toggleClass('img-ataque');
		
		$('.hp-charmander').val(ataque);
		setTimeout(function(){
			imagenPoke.toggleClass('img-ataque')
		}, 2000);
		// Deshabilitar Ataque
		$('.attack-btn-squirtle').attr('disabled', 'disabled');
		// Habilitar Ataque
		$('.attack-btn-charmander').removeAttr('disabled');
		
		
		if($('.hp-charmander').val() <= 0){
			charmander.hide();
			alert('Squirtle Gana');
		}
	});
	
});