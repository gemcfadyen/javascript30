var sounds = {
  65 : 'bells',
  66: 'closed-hi-hat',
  67: 'boom-kick',
  68: 'crash-cymbal'
};

function keyName(keyEvent) {
  return document.getElementById(keyEvent.key);
}

function emphasiseSquare(e) {
  var square = keyName(e);
  square.classList.add('flash');
}

function playSound(soundId) {
  var sound = document.getElementById(soundId);
  sound.currentTime = 0;
  sound.play();
}

document.onkeydown = function(e) {
  var soundId = sounds[e.keyCode];
  if (soundId) {
    playSound(soundId);
    emphasiseSquare(e);
  }
  else console.log("key not mapped : code is", e.keyCode);
}

document.onkeyup = function(e) {
  var soundId = sounds[e.keyCode];
  if (soundId) {
    var square = keyName(e);
    square.classList.remove('flash');
  }
}

