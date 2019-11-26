
var wordBank = ["Apple","Pear","Blueberry"];
var selectedWord = "";
var lettersInSelectedWord = [];
var numBlanks = 0;
var answerDisplay = [];
var wrongLetters = [];

// Game stats
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function startGame(){
    selectedWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log("selectedWord: ", selectedWord);
    lettersInSelectedWord = selectedWord.split("");
    console.log("lettersInSelectedWord: ",lettersInSelectedWord);
    numBlanks = lettersInSelectedWord.length;
    console.log("numBlanks",numBlanks);

    for(let i = 0; i < numBlanks; i ++){
        answerDisplay.push("_");
        console.log("answerDisplay: ",answerDisplay)
    }

    document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
};

startGame();