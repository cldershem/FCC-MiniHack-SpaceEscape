var gameState = {
	location: "some room",
	resources: {
		"wood": {
      text: "gethered some wood",
			amount: 0,
			display: true
		},
		"metal": {
      text: "gethered some metal",
      amount: 0,
			display: true
		}
  },
	buttons: [
		{
			name: "Gather Wood",
			display: true,
			action: 'updateWood'
		},
    {
			name: "Gather Metal",
			display: true,
			action: 'updateMetal'
		}
	]
}

localStorage.setItem('wood', 0)
localStorage.setItem('metal', 0)


gameState.buttons.map(function (button) {
	if (button.display) {
		$('.main-area').append('<button class="'+button.action+'"">'+button.name+'</button>')
	}
})

$('.updateWood').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('wood')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.wood.text+'</p>')
	localStorage.setItem('wood', temp)
  $('.wood').text(temp)
  checker()
})

$('.updateMetal').on('click', function (e) {
	var temp = parseInt(localStorage.getItem('metal')) + 1;
  $('.main-feed').prepend('<p>'+gameState.resources.metal.text+'</p>')
	localStorage.setItem('metal', temp)
  $('.metal').text(temp)
})


function checker () {
  
}


