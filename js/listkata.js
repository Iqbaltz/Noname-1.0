var kata = [ 'dog', 'bird', 'car', 'cow', 'bear', 'spoon', 'tiger', 'water', 'father', 'son', 'sun' ];

function randomWord() {
	return kata[Math.floor(Math.random() * kata.length)];
}

export { randomWord };
