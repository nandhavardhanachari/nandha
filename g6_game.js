let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
}