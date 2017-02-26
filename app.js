var gameState = {
	location: "some room",
	resources: {
		"funds": {
			text: "you raised funds by nefarious means",
			amount: 0,
			display: true
		},
		"metal": {
			text: "bought some metal",
			amount: 0,
			display: true
		},
		"food": {
			text: "gathered some food",
			amount: 0,
			display: true
		},
		
		"engineers": {
			text: "hired starving engineers",
			amount: 0,
			display: true
		},
		
		"parts": {
			text: "engineers build rocket parts",
			amount: 0,
			display: true
		},
		
		"weapons": {
			text: "engineers build weapons",
			amount: 0,
			display: true
		},
		
		"spaceship": {
			text: "build a kick-ass spaceship",
			amount: 0,
			display: true
		}
  },
	buttons: [
		{
			name: "Raise Funds",
			display: true,
			action: 'updateFunds'
		},
	    {
			name: "Buy Metal",
			display: true,
			action: 'updateMetal'
		},
		{
			name: "Gather Food",
			display: true,
			action: 'updateFood'
		},
		
		{
			name: "Hire Engineers",
			display: true,
			action: 'updateEngineers'
		},
		
		{
			name: "Build Parts",
			display: true,
			action: 'updateParts'
		},
		
		{
			name: "Build Weapons",
			display: true,
			action: 'updateWeapons'
		},
		
		{
			name: "Build Spaceship",
			display: true,
			action: 'updateSpaceship'
		}
	]
}

localStorage.setItem('funds', 0)
localStorage.setItem('metal', 0)
localStorage.setItem('food', 0)
localStorage.setItem('engineers', 0)
localStorage.setItem('parts', 0)
localStorage.setItem('weapons', 0)
localStorage.setItem('spaceship', 0)


gameState.buttons.map(function (button) {
	if (button.display) {
		$('.main-area').append('<button class="'+button.action+'"">'+button.name+'</button>')
	}
})

$('.updateFunds').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('funds')) + 1;
	$('.main-feed').prepend('<p>'+gameState.resources.funds.text+'</p>')
	localStorage.setItem('funds', temp)
	$('.funds').text(temp)
  checker()
})

$('.updateMetal').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('metal')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.metal.text+'</p>')
	localStorage.setItem('metal', temp)
  $('.metal').text(temp)
})

$('.updateFood').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('food')) + 1;
	$('.main-feed').prepend('<p>'+gameState.resources.food.text+'</p>')
	localStorage.setItem('food', temp)
	$('.food').text(temp)
})

$('.updateEngineers').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('engineers')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.engineers.text+'</p>')
	localStorage.setItem('engineers', temp)
  $('.engineers').text(temp)
})

$('.updateParts').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('parts')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.parts.text+'</p>')
	localStorage.setItem('parts', temp)
  $('.parts').text(temp)
})

$('.updateWeapons').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('weapons')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.weapons.text+'</p>')
	localStorage.setItem('weapons', temp)
  $('.weapons').text(temp)
})

$('.updateSpaceship').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('spaceship')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.spaceship.text+'</p>')
	localStorage.setItem('spaceship', temp)
  $('.spaceship').text(temp)
})


function checker () {
  
}


