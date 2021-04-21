//define variables////////////

let startBtn = document.querySelector('#start');


//functions////
//start quiz - init
function startQuiz() {
    //start timer
    //find an area on your HTML (DOM element) and show the first question there
    getQuestion();
}

//get the next question
function getQuestion() {
    // gets current question
    // show the question
    // show the choices with buttons
        // add event listener for each button created
    answerCheck();
}

//check user selection

function answerCheck() {
    //check the user selection against correct answer
    // incorrect selection remove seconds
    // set store score
    getQuestion();
    // if questions.length
    endGame();
}

//end game
function endGame() {
    // set their score
    // show end screen
    // clear out timer or set to 0
}

function saveHighScore() {
    // prompt for initials
    // save score to localstorage
}

// event listeners////////////
//start button click
startBtn.addEventListener('click', startQuiz);

//save high score
saveScore.addEventListener('click', saveHighScore);