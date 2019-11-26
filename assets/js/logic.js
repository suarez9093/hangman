// Global Variables
// =======================================================================
var wordArray = ["Goku","Vegeta","Tien"];
var selectedWord = "";
var lettersInWord = [];
var answerDisplay = [];
var wrongLetters = [];
var numBlanks = 0;

// Stats
var wins = 0;
var losses = 0;
var guessesLeft = 9;


// Functions
// =======================================================================
function startGame(){
    selectedWord = wordArray[Math.floor(Math.random()*wordArray.length)]
    console.log("selectedWord: ",selectedWord)
    lettersInWord = selectedWord.split("")
    console.log("Letters in word: ",lettersInWord)
    numBlanks = lettersInWord.length;
    console.log("numBlanks: ", numBlanks)

    // Reset guesses left, wrong letters guessed and the answerDisplay
    guessesLeft = 9;
    wrongLetters = [];
    answerDisplay = [];

    // Image reset for the characters


    // ==================

    for(let i = 0; i < numBlanks; i++){
        answerDisplay.push("_")
    }

    document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
}



// =======================================================================
startGame()
console.log("displayBlanks: ",answerDisplay)
