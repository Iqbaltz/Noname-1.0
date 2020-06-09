var words = [ 'dog', 'bird', 'car', 'cow', 'bear', 'spoon', 'tiger', 'water', 'father', 'son', 'sun',
'sky', 'mother', 'computer', 'television', 'house', 'headphone', 'headset', 'handphone', 'smartphone',
'phone', 'monitor', 'aquarium', 'window', 'school' ];

function randomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
