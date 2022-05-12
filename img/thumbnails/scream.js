const screams = [
  'mixkit-falling-male-scream-391.wav',
  'Goat-Scream-Sound-Effect.wav',
  'couragescream07.wav',
  'Air-raid-siren.mp3',
  'FNAF Jump scare scream Sound Effect.mp3',
  'full-golden-freddy-scream.mp3'
];

function scream() {
  // Generate a random number to select a audio file from the above array
  var whichScream = Math.floor(Math.random() * screams.length);

  var sound      = document.createElement('audio');
  sound.src      = 'audio/' + screams[whichScream];
  sound.type     = 'audio/wav'+'audio/mp3';
  sound.play();
}
