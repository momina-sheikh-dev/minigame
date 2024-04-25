
let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultMessage = '';

    if (choice === computerChoice) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = 'You win!';
        playerScore++;
    } else {
        resultMessage = 'You lose!';
        computerScore++;
    }

    document.getElementById('resultMessage').innerText = `${resultMessage} Player: ${playerScore} - Computer: ${computerScore}`;
    document.getElementById('resultModal').style.display = 'block';
}

// Close the modal when clicking on the close button
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('resultModal').style.display = 'none';
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('resultModal')) {
        document.getElementById('resultModal').style.display = 'none';
    }
}

// Function to navigate back to the landing page
function goBack() {
  window.location.href = 'landing page.html'; // Replace 'index.html' with the path to your landing page
}
