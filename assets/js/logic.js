
var wordBank = ["apple", "pear", "blueberry"];
var selectedWord = "";
var lettersInSelectedWord = [];
var numBlanks = 0;
var answerDisplay = [];
var wrongLetters = [];

// Game stats
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function startGame() {
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("selectedWord: ", selectedWord);
    lettersInSelectedWord = selectedWord.split("");
    console.log("lettersInSelectedWord: ", lettersInSelectedWord);
    numBlanks = lettersInSelectedWord.length;
    console.log("numBlanks", numBlanks);

    for (let i = 0; i < numBlanks; i++) {
        answerDisplay.push("_");
        console.log("answerDisplay: ", answerDisplay)
    }
    document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
};

function checkLetters(letter){
    if(event.keyCode >=65 && event.keyCode <= 90){
        var correctLetter = false;
        for(let i = 0; i < numBlanks; i++){
            if(selectedWord[i] == letter){
                correctLetter = true;
            }
        }
        if(correctLetter){
            for(let i = 0; i < numBlanks; i++){
                if(selectedWord[i] == letter){
                    answerDisplay[i] = letter;
                } 
            }
        } else {
            wrongLetters.push(letter);
            guessesRemaining--;
        }
    }
    console.log("answerDisplay: ",answerDisplay);
    console.log("wrongLetters: ",wrongLetters);
    console.log("guessesRemaining: ",guessesRemaining);
    document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
}



startGame();

document.onkeyup = function (event) {
    // console.log("event: ",event)
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log("letterGuessed: ",letterGuessed)

    checkLetters(letterGuessed)
};

console.log(guessesRemaining)