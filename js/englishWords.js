var words = [ 'dog', 'bird', 'car', 'cow', 'bear', 'spoon', 'tiger', 'water', 'father', 'son', 'sun' ];

function randomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
