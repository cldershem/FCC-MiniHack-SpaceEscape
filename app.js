function loadStory() {
  var fakeStory = [
    'line 1',
    'line 2',
    'line 3',
    'line 4',
    'line 5',
    'line 6',
    'line 7',
    'line 8',
  ]
  for (var i=0; i<fakeStory.length; i++) {
    $('#story').append('<li>' + fakeStory[0] + '</li>');
  }
}

function loadButtons() {
}

function loadResources() {
}

function displayModal(message) {
}

$(document).ready(function() {
  loadStory();
});
