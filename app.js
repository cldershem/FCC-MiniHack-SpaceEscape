var gameState = {
	location: "some room",
	resources: {
		"funds": {
			text: "you raised funds",
			amount: 0,
			display: true
		},
		"metal": {
			text: "bought some metal",
			amount: 0,
			display: true
		},
		"food": {
			text: "gethered some food",
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
		}
	]
}

localStorage.setItem('funds', 0)
localStorage.setItem('metal', 0)
localStorage.setItem('food', 0)


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


function checker () {
  
}


