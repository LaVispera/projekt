let words = [
    "uggla",
    "fotboll",
    "blåbär",
    "tranemo",
    "programmering",
    "yggdrasil"
];

console.log(words.length);
let pick = Math.floor(Math.random() * words.length);
console.log(pick);
console.log(words[pick]);
let pickedWord = words[pick];
let chars = pickedWord.length;


const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");

let xPos = 10;
let yPos = 330;
const letterSpacing = 18;

ctx.lineWidth = 2;
ctx.beginPath();
for (let i = 0; i < chars; i++) {
    ctx.moveTo(xPos, yPos);
    xPos += letterSpacing;
    ctx.lineTo(xPos, yPos);
    xPos += letterSpacing;
}
ctx.stroke();
let charXPos = 15;
let charPositions = [];
for (let i = 0; i < chars; i++) {
    // ctx.fillText(pickedWord[i], charXPos, 325);
    charPositions[i] = charXPos;
    charXPos += 2 * letterSpacing;
}

let badGuesses = 0;
const maxBadGuesses = 10;

const makeGuess = (e) => {
	e.preventDefault();
	let guess = document.getElementById("guess").value;
	console.log(guess);
    let indices = getIndicesOf(guess, pickedWord);
    console.log(indices);
    if ( indices.length ) {
        // Korrekt gissning
        for (let i = 0; i < indices.length; i++ ) {
            ctx.fillText(pickedWord[indices[i]], charPositions[indices[i]], 325);
        }
    } else {
        // Fel gissning
        badGuesses++;
        // Rita nästa del av gubben

        // Visa bokstaven

        if ( badGuesses >= maxBadGuesses ) {
            // Gubben hängd game over
        }
    }
}


const guessform = document.getElementById("guessform");

guessform.addEventListener("submit", makeGuess);

/**
*
* @param searchStr Ordet som ska genomsökas
* @param str Det man letar efter
* @return En array med alla platser (indeX där bokstaven fanns)
*
*/

function getIndicesOf(searchStr, str) {
    let searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    let startIndex = 0, index, indices = [];
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}