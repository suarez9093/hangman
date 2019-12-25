window.onload = function () {


    var wordBank = ["goku", "vegeta", "trunks", "bulma", "cell", "vegito", "gogeta", "majin buu", "dragonballz", "kamehameha"];
    var selectedWord = "";
    var lettersInSelectedWord = [];
    var numBlanks = 0;
    var answerDisplay = [];
    var wrongLetters = [];
    // var dragonBall = document.createElement("img");
    // dragonBall.src = "../img/dragonball.png"
    // console.log("dragonball",dragonBall)
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

        document.getElementById("goku").classList.remove("dead");
        document.getElementById("vegeta").classList.remove("dead");
        document.getElementById("buu").classList.remove("dead");
        document.getElementById("gogeta").classList.remove("dead");
        document.getElementById("trunks").classList.remove("dead");
        document.getElementById("gohan").classList.remove("dead");
        document.getElementById("freiza").classList.remove("dead");
        document.getElementById("vegito").classList.remove("dead");

        for (let i = 0; i < numBlanks; i++) {
            answerDisplay.push("_");
            console.log("answerDisplay: ", answerDisplay)
        }
        document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
    };

    function checkLetters(letter) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var correctLetter = false;
            for (let i = 0; i < numBlanks; i++) {
                if (selectedWord[i] == letter) {
                    correctLetter = true;
                }
            }
            if (correctLetter) {
                for (let i = 0; i < numBlanks; i++) {
                    if (selectedWord[i] == letter) {
                        answerDisplay[i] = letter;
                    }
                }
            } else {
                wrongLetters.push(letter);
                guessesRemaining--;
            }
        }
        console.log("answerDisplay: ", answerDisplay);
        console.log("wrongLetters: ", wrongLetters);
        console.log("guessesRemaining: ", guessesRemaining);

    }

    function endRound() {
        document.getElementById("selected_word").innerHTML = answerDisplay.join(" ")
        document.getElementById("wrongLetters").innerHTML = "Letters Guessed:" + " " + wrongLetters.join(" ")
        document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining

        if (lettersInSelectedWord.toString() == answerDisplay.toString()) {
            alert(`You win! The word was ${selectedWord}`)
            wins++
            document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
            document.getElementById("wrongLetters").innerHTML = "Letters Guessed:"
            startGame();
        }
        switch (guessesRemaining) {
            case 8:
                document.getElementById("goku").classList.add("dead");
                break;
            case 7:
                document.getElementById("vegeta").classList.add("dead");
                break;
            case 6:
                document.getElementById("trunks").classList.add("dead");
                break;
            case 5:
                document.getElementById("gohan").classList.add("dead");
                break;
            case 4:
                document.getElementById("freiza").classList.add("dead");
                break;
            case 3:
                document.getElementById("vegito").classList.add("dead");
                break;
            case 2:
                document.getElementById("gogeta").classList.add("dead");
                break;
            case 1:
                document.getElementById("buu").classList.add("dead");
                break;
            case 0:
                alert(`You lose! The word was ${selectedWord}`);
                losses++;
                document.getElementById("losses").innerHTML = "Losses:" + " " + losses;
                document.getElementById("wrongLetters").innerHTML = "Letters Guessed:"
                startGame();
                break;
        }
    }


    // Main Process
    // ====================================================================

    startGame();

    document.onkeyup = function (event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

        checkLetters(letterGuessed)
        endRound();


    };



    console.log(guessesRemaining)
}