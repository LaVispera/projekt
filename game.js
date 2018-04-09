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

const makeGuess = (e) => {
	e.preventDefault();
	let guess = document.getElementById("guess").value;
	console.log(guess);
    let indices = getIndicesOf(guess, pickedWord);
    console.log(indices);
}


const guessform = document.getElementById("guessform");

guessform.addEventListener("submit", makeGuess);

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