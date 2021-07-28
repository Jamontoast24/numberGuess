const guessingGame = () => {

    let scoreDisplay = document.getElementById('scoreNum')
    let highScoreDisplay = document.getElementById('highScoreNum')
    let attemptDisplay = document.getElementById('attemptsNum')
    let feedback = document.getElementById('feedback')
    let userGuess = document.querySelector('.userGuess')
    let validateGuess = document.querySelector('.validate')
    let restart = document.querySelector('.restart')

    const playGame = () => {

        let randomNum = Math.floor(Math.random() * 10) + 1
        
        const logNum = ( ) => {

            console.log('The number is: ' + ' ' + randomNum)}

        logNum()

        const resetGuessBar = () => {
            document.querySelector('.userGuess').value = ''
        }
        resetGuessBar()

        const guessAnswer = () => {
      
            validateGuess.addEventListener('click', function(){
                if (userGuess.value === ''){
                    feedback.innerHTML = 'Please enter a number.'
                    attemptDisplay.innerHTML++
                }
                            if (userGuess.value != randomNum){
                attemptDisplay.innerHTML--
                if (userGuess.value > randomNum) {
                    feedback.innerHTML = 'You guessed too high'
                    resetGuessBar()
                }
                else if (userGuess.value < randomNum  && userGuess.value != ''){
                    feedback.innerHTML = 'You guessed too low'
                    resetGuessBar()
                }
            }
            else if (userGuess.value = randomNum) {
                feedback.innerHTML = 'Correct answer !'
                resetGuessBar()
                scoreDisplay.innerHTML++
                if (scoreDisplay.innerHTML > highScoreDisplay.innerHTML) {
                    highScoreDisplay.innerHTML++
                }
                randomNum = Math.floor(Math.random() * 10) + 1
                logNum()
            }

            if (attemptDisplay.innerHTML <= 0){
                validateGuess.disabled = true;
                feedback.innerHTML = 'Game over, you have no attempts left. Click restart if you\'d like to play again'
            }
            })

        const enterGuess = () => {
            let guessEnter = document.querySelector('.userGuess')
            guessEnter.addEventListener('keyup',function(event) {
                if (event.keyCode === 13){
                    event.preventDefault();
                    document.querySelector('.validate').click()
                }
            })
        }
        enterGuess()       
    }
        guessAnswer()

    const restartGame = () => {

        restart.addEventListener('click', function() {
            scoreDisplay.innerHTML = 0;
            attemptDisplay.innerHTML = 10;
            document.querySelector('.userGuess').value = ''
            feedback.innerHTML = ''
            validateGuess.disabled = false;
            randomNum = Math.floor(Math.random() * 10) + 1        
            logNum()
            
        })
    }
    restartGame()
    
}

playGame()

}

guessingGame()


