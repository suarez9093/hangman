
var wordBank = ["goku", "vegeta", "trunks"];
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

    guessesRemaining = 9;
		wrongLetters = [];
		answerDisplay = [];
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
    
}

function endRound(){
    document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
    document.getElementById("wrongLetters").innerHTML = "Letters Guessed:" + " " + wrongLetters.join(" ")
    document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining

    if(lettersInSelectedWord.toString() == answerDisplay.toString()){
        wins++
        document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
        document.getElementById("wrongLetters").innerHTML = "Letters Guessed:"
        startGame();
    } else if (guessesRemaining == 0) {
        losses ++;
        document.getElementById("losses").innerHTML = "Losses:" + " " + losses;
        document.getElementById("wrongLetters").innerHTML = "Letters Guessed:"
        startGame();
    }
}


// Main Process
// ====================================================================

startGame();

document.onkeyup = function (event) {
    // console.log("event: ",event)
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log("letterGuessed: ",letterGuessed)

    checkLetters(letterGuessed)
    endRound()

    if( guessesRemaining == 8){
        document.getElementById("goku").classList.add("dead")
        document.getElementById("audio").play();
       
    }
    if( guessesRemaining == 7){
        document.getElementById("vegeta").classList.add("dead")
        document.getElementById("audio").play();
    }
    if( guessesRemaining == 6){
        console.log("6")
    }
    if( guessesRemaining == 5){
        console.log("5")
    }
    if( guessesRemaining == 4){
        console.log("4")
    }
    if( guessesRemaining == 3){
        console.log("3")
    }
    if( guessesRemaining == 2){
        console.log("2")
    }
    if( guessesRemaining == 1){
        console.log("1")
    }
};



console.log(guessesRemaining)