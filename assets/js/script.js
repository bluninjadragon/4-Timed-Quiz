//define variables////////////

let startBtn = document.querySelector('#start');
let saveScore = document.querySelector('#save-score');
let questionTitle = document.querySelector('#question-title');
let choicesDiv = document.querySelector('#choices');
let questionIndex = 0;
let questionScore = 0;


//functions////
//start quiz - init
function startQuiz() {
    //start timer
    //find an area on your HTML (DOM element) and show the first question there
    getQuestion();
}

//get the next question
function getQuestion() {
    //moved the index/length logic up to the first getQuestion so that it would not try to pull another question object in the array that isn't defined when question index >= questions.length
    if (questionIndex < questions.length) {
        // gets current question
        let currentQuestion = questions[questionIndex];
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
        //when questionIndex = questions.length, go to end game
    } else
        endGame();
}
//check user selection

function answerCheck() {
    //finally got this to work ONLY by changing to '==' from '==='. guessing that the '.value' button changed it to a constant from a STRING....]
		
    //check the user selection against correct answer
    if (this.value == questions[questionIndex].answer) {
        questionIndex++;
        // set store score
        questionScore++;
        alert('Correct!');
        choicesDiv.textContent = "";
        getQuestion();
    } else {
        questionIndex++;
        alert('Wrong!');
        choicesDiv.textContent = "";
        getQuestion();}

    // incorrect selection remove seconds
    
}

//timer
function countdown() {
    
}

//end game
function endGame() {
    questionTitle.textContent = "Your Score Is:";
    choicesDiv.textContent = questionScore;
    let scoreBtn = document.createElement("button");
    scoreBtn.textContent = "Save High Score";
    scoreBtn.onclick = "./external/highscores.html";
    saveScore.appendChild(scoreBtn);
    // set their score
    // show end screen
    // clear out timer or set to 0
}

function saveHighScore() {
    alert('high score page')
    // prompt for initials
    // save score to localstorage
}

// event listeners////////////
//start button click
startBtn.addEventListener('click', startQuiz);

//save high score
//saveScore.addEventListener('click', saveHighScore);
