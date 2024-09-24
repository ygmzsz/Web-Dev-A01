let playerName = '';
let max = 0;
let randNum = 0;
let minRange = 1; 
let maxRange = 0; 

function NameEntry() {
    playerName = document.getElementById('name').value.trim();
    


    if (playerName == '') {
        document.getElementById('name').placeholder = 'You must enter a name'; 
    } else {
        
        document.getElementById("Name").innerHTML = playerName;
        document.getElementById('box').classList.add('hidden');
        document.getElementById('boxHide').classList.remove('hidden');
        document.getElementById('expBox').classList.add('hidden'); 
    }
}

function MaxGuessEntry() {
    max = parseInt(document.getElementById('maxGuessInput').value.trim());
   
    if (isNaN(max) || max < 1 || max > 999) {
        document.getElementById('maxGuessInput').value = '';
        document.getElementById('maxGuessInput').placeholder = 'Not in the 1-999 range';
    } else {
        maxRange = max;
        document.getElementById('boxHide').classList.add('hidden');
        document.getElementById('boxHide2').classList.remove('hidden');
        GenerateRandomNumber();
    }
}

function GenerateRandomNumber() {
    randNum = Math.floor(Math.random() * max) + 1;
}

function MakeGuess() {
    let guess = parseInt(document.getElementById('guessInput').value.trim());
    const feedback = document.getElementById('feed');

    if (isNaN(guess) || guess < minRange || guess > maxRange)
    {
        feedback.innerText = `Please enter a valid number between ${minRange} and ${maxRange}.`;
        return;
    }

    if (guess < randNum) {
        feedback.innerText = 'Too low! Try again.';
        minRange = guess + 1; 
    } 
    else if (guess > randNum) 
    {
        feedback.innerText = 'Too high! Try again.';
        maxRange = guess - 1; 
    } 
    else 
    {
        feedback.innerText = `Congratulations ${playerName} you have entered the correct number!`;
        playAgainButton.classList.remove('hidden');
    }

    UpdateRangeDisplay();
}

function UpdateRangeDisplay() {
    document.getElementById('range').innerText = `Current Range: ${minRange} - ${maxRange}`;
}

function ResetGame()
{
    minRange = 1;
    maxRange = 999;
    max = 0;
    randNum = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feed').innerText = '';
    document.getElementById('range').innerText = '';
    document.getElementById('maxGuessInput').value = '';
    document.getElementById('playAgainButton').classList.add('hidden'); 
    document.getElementById('boxHide2').classList.add('hidden');
    document.getElementById('boxHide').classList.remove('hidden');
}
