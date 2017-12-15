// Task 1

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const myAlphabet = document.getElementById('alphabet');
myAlphabet.innerHTML = `Алфавит: ${alphabet}`;

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

addKeyboardLayout (alphabet);

function addKeyboardLayout (y) {

	let massAlphabet = y.split('');

	let firstLine = massAlphabet.slice(0,12);
	let secondLine = massAlphabet.slice(12,23);
	let thirdLine = massAlphabet.slice(23,35);

	let stringFirstLine = firstLine.join(" ");
	let stringSecondLine = secondLine.join(" ");
	let stringThirdLine = thirdLine.join(" ");

	line1.innerHTML = `Верхний ряд - ${stringFirstLine}`;
	line2.innerHTML = `Средний ряд - ${stringSecondLine}`;
	line3.innerHTML = `Нижний ряд - ${stringThirdLine}`;

	let keyboard = [];

	keyboard.push(firstLine);
	keyboard.push(secondLine);
	keyboard.push(thirdLine);


// Task 2

	const letter1 = document.getElementById('letter1');
	const letter2 = document.getElementById('letter2');
	const letter3 = document.getElementById('letter3');

	document.getElementById('getRowNumber').onclick = function () {
		getRandCharInRow (firstLine);
		getRandCharInRow (secondLine);
		getRandCharInRow (thirdLine);
	}

	function getRandCharInRow (row) {
		let rowLength = row.length;
		let randomRowNumber = Math.floor(rowLength * Math.random());

		for (var i=0; i<rowLength; i++) {
			if (i == randomRowNumber) {
				var randomRowLetter = row[i];
			}
		}

		if (row == firstLine) {
			letter1.innerHTML = `Случайное число первого ряда - ${randomRowLetter}`;
		}
		if (row == secondLine) {
			letter2.innerHTML = `Случайное число второго ряда - ${randomRowLetter}`;
		}
		if (row == thirdLine) {
			letter3.innerHTML = `Случайное число третьего ряда - ${randomRowLetter}`;
		}
	}


// Task 3

	const letterMain = document.getElementById('letterMain');

	document.getElementById('getAlphabetNumber').onclick = function () {
		getRandCharInAlph ();
	}

	function getRandCharInAlph () {

		// let firstRowLength = firstLine.length;
		// let firstRowNumber = Math.floor(firstRowLength * Math.random());

		// for (var i=0; i<firstRowLength; i++) {
		// 	if (i == firstRowNumber) {
		// 		var firstRowLetter = firstLine[i];
		// 	}
		// }

		// let secondRowLength = secondLine.length;
		// let secondRowNumber = Math.floor(secondRowLength * Math.random());

		// for (var i=0; i<secondRowLength; i++) {
		// 	if (i == secondRowNumber) {
		// 		var secondRowLetter = secondLine[i];
		// 	}
		// }

		// let thirdRowLength = thirdLine.length;
		// let thirdRowNumber = Math.floor(thirdRowLength * Math.random());

		// for (var i=0; i<thirdRowLength; i++) {
		// 	if (i == thirdRowNumber) {
		// 		var thirdRowLetter = thirdLine[i];
		// 	}
		// }


		// let alphabet = [];

		// alphabet.push(firstRowLetter);
		// alphabet.push(secondRowLetter);
		// alphabet.push(thirdRowLetter);

		// let alphabetLength = alphabet.length;
		// let alphabetNumber = Math.floor(alphabetLength * Math.random());

		// for (var i=0; i<alphabetLength; i++) {
		// 	if (i == alphabetNumber) {
		// 		var alphabetLetter = alphabet[i];
		// 	}
		// }


		// letterMain.innerHTML = `Главное число - ${alphabetLetter}`;

		let newAlphabet = alphabet.split('');

		let alphabetLength = newAlphabet.length;
		let alphabetNumber = Math.floor(alphabetLength * Math.random());

		for (var i=0; i<alphabetLength; i++) {
			if (i == alphabetNumber) {
				var alphabetLetter = newAlphabet[i];
			}
		}


		letterMain.innerHTML = `Главное число - ${alphabetLetter}`;

	}

}