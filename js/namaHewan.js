var hewan = [ 'ikan', 'ayam', 'bebek', 'burung', 'sapi', 'beruang', 'harimau', 'kancil', 'rusa', 'anjing', 'kucing', 'bison', 'badak',
 'singa', 'jerapah', 'paus', 'zebra', 'kudanil', 'kuda' ];

function randomWord() {
	return hewan[Math.floor(Math.random() * hewan.length)];
}

export { randomWord };
