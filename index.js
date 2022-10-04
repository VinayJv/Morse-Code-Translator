//https://api.funtranslations.com/translate/morse.json
//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

document.getElementById('btn').addEventListener("click", translateText);

var inputText  = document.getElementById('inputText');
var outputText = document.getElementById('output');
var serverUrl = "https://api.funtranslations.com/translate/morse.json";
var translatedText = "";


function generateURL(inputText) {
    return serverUrl + "?" + "text=" + inputText.value;
}


function translateText() {
    fetch(generateURL(inputText)).then(response => response.json()).then(json => {
        translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    }).catch((error) => {
            console.log("something went wrong", error);
            alert("Something went wrong try again after some time");
        });
}
