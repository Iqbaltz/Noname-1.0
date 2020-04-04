var hewan = [ 'ikan', 'ayam', 'bebek', 'burung', 'sapi', 'beruang', 'harimau', 'kancil', 'rusa', 'anjing', 'kucing' ];

function randomWord() {
	return hewan[Math.floor(Math.random() * hewan.length)];
}

export { randomWord };
