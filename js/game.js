import { randomWord } from './namaHewan.js';

var answer = document.getElementById('answer');
var word = document.getElementById('word');
var answered = [];

let pickedWord = randomWord();

for (let x in pickedWord) {
	answered.push('_');
}

answer.innerHTML = answered.join(' ');

let guessedWord;
// do while loop, untuk ngecek apakah kata yang dishuffle masih sama dengan kata asli nya
// jika masih sama maka kata tersebut akan di shuffle lagi
do {
	guessedWord = shuffle(pickedWord.split('')).join('');
} while (pickedWord == guessedWord);

for (let i in guessedWord) {
	word.innerHTML += `<span class='huruf'>${guessedWord[i]}</span>`;
}

var hurufs = document.querySelectorAll('.huruf');

for (let i = 0; i < hurufs.length; i++) {
	hurufs[i].onclick = function() {
		handleGuess(this.textContent);
		this.style.display = 'none';
	};
}

// guessedWord.split('').map((huruf, i) => {
// 	document.getElementById(i).addEventListener('click', () => handleGuess(huruf));
// });

let count = 0;
function handleGuess(huruf) {
	answered[count] = huruf;
	count++;
	answer.innerHTML = answered.join(' ');
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Used like so
