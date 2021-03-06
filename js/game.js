// ngimport kata2 yang mau dirandom dari namakata.js
import { randomWord } from './englishWords.js';

// ngatur variable bosquuh
const answer = document.getElementById('answer');
const word = document.getElementById('word');
const tombolReset = document.getElementById('btn-reset');
const scoreDisplay = document.getElementById('score');
let answered = [];
let count = 0;
let pickedWord = randomWord();
let guessedWord;
let score = 0;

$('.container').hide();
$('.btn-reset').hide();
$('.btn-back').hide();
$('.scoreBoard').hide();
$('.btn-mulai').click(function() {
	reset();
	score = 0;
	scoreDisplay.innerHTML = score;
	$('.scoreBoard').show();
	$('.container').show();
	$('.container-1').hide();
	$('.btn-reset').show();
	$('.btn-back').show();
	$('.btn-back').click(function() {
		$('.container').hide();
		$('.btn-reset').hide();
		$('.btn-back').hide();
		$('.container-1').show();
		$('.scoreBoard').hide();
	});
});

// ini yang bikin tombol reset kalo diklik jalankan fungsi reset dia
tombolReset.onclick = function() {
	reset();
};

// manggil fungsi reset biar jalan kodenya gan
// kalo kau hapus dia pasti gak jalan
reset();

function reset() {
	if (word.classList.value.includes('false')) {
		word.classList.toggle('false');
	} else if (word.classList.value.includes('true')) {
		word.classList.toggle('true');
	}
	count = 0;
	answered = [];
	pickedWord = randomWord();
	word.innerHTML = '';
	for (let x in pickedWord) {
		answered.push('_');
	}
	answer.innerHTML = answered.join(' ');
	// do while loop, untuk ngecek apakah kata yang dishuffle masih sama dengan kata asli nya
	// jika masih sama maka kata tersebut akan di shuffle lagi
	do {
		guessedWord = shuffle(pickedWord.split('')).join('');
	} while (pickedWord == guessedWord);

	//ngeloop untuk nampilkan huruf yang diacak tadi
	for (let i in guessedWord) {
		// tiap huruf ada <span> nya, inspect aja kalo gak caya
		// terus kutambah class huruf biar bisa di queryselector
		word.innerHTML += `<span class='huruf'>${guessedWord[i]}</span>`;
	}

	// siap ditampilkan huruf yang mau ditebak,
	// aku buat variabl hurufs, yaitu semua yang ada class .huruf
	var hurufs = document.querySelectorAll('.huruf');

	// kan hurufs itu jamak, artinya banyak, jadi ku loop lah
	// pake for loop aja, soalnya cuman mau makek i nya buat index
	for (let i = 0; i < hurufs.length; i++) {
		// tiap huruf di hurufs kalo diklik maka pindah dia ke kolom answer/jawaban
		hurufs[i].onclick = function() {
			isiJawaban(this.textContent); //nambahkan huruf ke answer
			this.style.display = 'none'; //ngehapus display huruf
			// ngecek jawaban dengan cara yang ajaib wkwk
			if (count == pickedWord.length) {
				// ngecek jawaban benar ato salah, dengan metode includes
				if (answered.join('').includes(pickedWord)) {
					handleAnswer(true);
				} else {
					handleAnswer(false);
				}
			}
		};
	}
}

function handleAnswer(answer) {
	playSound(`${answer ? 'windows' : 'oof'}`);
	answer ? (score += 2) : score--;
	console.log(score);
	scoreDisplay.innerHTML = score;
	word.classList.toggle(`${answer}`);
	word.innerHTML = `${answer ? 'Good Job ! 😎' : "Oops! that's wrong 😋"}`;
	setTimeout(() => {
		reset();
	}, 2000);
}

// fungsi untuk ngisi kolom answer/jawaban
function isiJawaban(huruf) {
	answered[count] = huruf;
	count++;
	answer.innerHTML = answered.join(' ');
}

// fungsi untuk jalankan suara
function playSound(suara) {
	var audio = new Audio(`sounds/${suara}.mp3`);
	audio.play();
}

// fungsi untuk ngacak katanya
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
