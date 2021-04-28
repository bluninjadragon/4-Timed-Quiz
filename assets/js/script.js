//define variables////////////

let startBtn = document.querySelector('#start');
let saveScore = document.querySelector('#save-score');
let questionTitle = document.querySelector('#question-title');
let choicesDiv = document.querySelector('#choices');
let initialsLabel = document.querySelector('#initials-label');
let initialsInput = document.querySelector('#initials-input');
let timerEl = document.getElementById('countdown');
let questionIndex = 0;
let questionScore = 0;
let timeLeft = 180;

//functions////
//start quiz - init
function startQuiz() {
    //start timer
    //find an area on your HTML (DOM element) and show the first question there
    getQuestion();
    countdown();
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
        timeLeft-10;
        alert('Wrong!');
        choicesDiv.textContent = "";
        getQuestion();}
        //If wrong, penalize time by 10 secons

    // incorrect selection remove seconds
    
}

//timer
function countdown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '0';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //hide game clock and jump to endGame screen
        timerEl.textContent = ""
        endGame();
      }
    }, 1000);
}

//end game
function endGame() {
    // show score
    questionTitle.textContent = "Your Score Is:";
    choicesDiv.textContent = questionScore*10;
    // save score to localstorage
    localStorage.setItem("highScores", questionScore*10);
    // prompt for initials within form
    initialsLabel.textContent = "Enter Initials Here";
    initialsInput.setAttribute('style', '');

    // create button to prompt save score
    let scoreBtn = document.createElement("button");
    scoreBtn.textContent = "Save High Score";
    scoreBtn.onclick = highScorePage;
    //add elements to HTML
    saveScore.appendChild(scoreBtn);
    // set their score
    // show end screen
    // clear out timer or set to 0
}

function highScorePage() {
    document.location = 'file:///C:/Users/jwhsi/Desktop/code/Timed%20Quiz%20-%204/4-Timed-Quiz/highscores.html';
    // prompt for initials
    
}

// event listeners////////////
//start button click
startBtn.addEventListener('click', startQuiz);

//save high score
//saveScore.addEventListener('click',  saveHighScore);
