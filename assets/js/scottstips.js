//define variables////////////

let startBtn = document.querySelector('#start');
let saveScore = document.querySelector('#save-score');
let questionTitle = document.querySelector('#question-title');
let choicesDiv = document.querySelector('#choices');
let questionIndex = 0;


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
    let currentQuestion = questions[0];
    // show the question
    questionTitle.textContent = currentQuestion.title;
    // show the choices with buttons. instructor taught us syntax for "forEach"
    currentQuestion.choices.forEach(choice => {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value",choice);
        // add event listener for each button created
        choiceButton.onclick = answerCheck;
        choicesDiv.appendChild(choiceButton);
    });
        
    answerCheck();
}

//check user selection

function answerCheck() {
    alert(this.value);
    //check the user selection against correct answer
    // incorrect selection remove seconds
    // set store score
    //getQuestion();
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