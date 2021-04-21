//Acceptance Criteria

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

//----------------
//VARIABLES
//----------------
let generateBtn = document.querySelector("#generate");
let timerEl = document.getElementById('countdown');

//----------------
//FUNCTIONS
//----------------

//click start button, timer begins/init()
function init() {
    generateBtn.addEventListener("click", countdown);

}

//countdown timer. copied from activity 04-10.
function countdown() {
    let timeLeft = 180;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        //start to see if there is a penalty
        timerPenalty();
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
        // Call the `displayMessage()` function
        gameOver();
      }
    }, 1000);
}

//timer variable decreases by 10 seconds for wrong answer

function timerPenalty(timeLeft) {
};

//answer correctly, + 1 point.

function correct() {

};
//display 'Game Over' card
function gameOver() {

};

function highScore() {

};

function restart() {

};

//-----------------
//EVENT LISTENERS
//-----------------

//init - click start button, timer begins
init();

//click on any button, move to next card/page



//answer correctly, + 1 point. answer incorrectly, -10 sec timer

correct();

//when timer is up, stop and have a message that says "Game Over"

gameOver();

//enter initals and save high score

highScore();

//game repeats and score is reset
restart();

