let wordsArray = [];
let translatedWordsArray = [];

function addWord() {
	wordsArray.push(document.getElementById('word').value);
	translatedWordsArray.push(document.getElementById('translation').value);
	document.getElementById('word').value = "";
	document.getElementById('translation').value = "";
}

function searchWord() {
	var searchBy = document.getElementById('searchWord').value;
	var posWord = wordsArray.indexOf(searchBy);
	var translation = translatedWordsArray[posWord];
	if (wordsArray.includes(searchBy)) {
		document.getElementById('searchResult').innerHTML = `You are searching for: <strong>` + searchBy + `</strong>. Translation for this word is: <strong>` + translation + `</strong>`;
	} else {
		document.getElementById('searchResult').innerHTML = `The word <strong>` + searchBy + `</strong> couldn't be found in the dictionary`;
	}
	document.getElementById('searchWord').value = "";
}