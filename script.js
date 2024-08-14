let Num = Math.random()
let randomNum = parseInt(Num * 100 + 1);

let userInput = document.querySelector('#guessField');
let submit = document.querySelector('#submit');
let remaining = document.querySelector('.guess-count');
let previous =document.querySelector('.guesses');
let lowHigh = document.querySelector('.lowOrhigh');
let resultBox = document.querySelector('.result-box');
let p = document.createElement('p');
let previousGuess = [];

let guessNum = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        previousGuess.push(guess);
        if(guessNum === 11){
            showGuess(guess);
            showMsg(`Game Over , Random Number was ${randomNum}`);
            endGame();
        }else{
            showGuess(guess);
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNum){
        showMsg('You Guessed it right.');
        endGame();
    }else if(guess < randomNum){
        showMsg('Your Number is too low')
    }else if(guess > randomNum){
        showMsg('Your Number is too High')
    }
}

function showGuess(guess){
    userInput.value = '';
    previous.innerHTML += `${guess} `;
    guessNum++;
    remaining.innerHTML = `${11 - guessNum}`;
}

function showMsg (message){
    lowHigh.innerHTML = `${message}`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 class = "newGame">Start New Game</h2>`;
    resultBox.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('.newGame');
    newGameBtn.addEventListener('click', function(e){
        randomNum =  parseInt(Num * 100 + 1);
        previous = [];
        guessNum = 1;
        previous.innerHTML = '';
        lowHigh.innerHTML = '';
        remaining.innerHTML = `${11 - guessNum}`;
        userInput.removeAttribute('disabled');
        resultBox.removeChild(p);
        playGame = true;
    })
}