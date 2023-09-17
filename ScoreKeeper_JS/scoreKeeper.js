const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playto');
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

p1Button.addEventListener('click', updateScore);
p2Button.addEventListener('click', updateScore);

resetButton.addEventListener('click', reset);
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScore () {
    // console.log(this);
    let playDisplay = (this == p1Button)? p1Display : p2Display;
    let oppDisplay = (this == p1Button)? p2Display : p1Display;
    let curScore = parseInt(playDisplay.textContent);
    let finScore = curScore;
    if (curScore < winningScore && !isGameOver) {
        finScore = curScore + 1;
        playDisplay.textContent = `${finScore}`;
    }
    if (finScore == winningScore) {
        isGameOver = true;
        playDisplay.classList.add('text-success');
        oppDisplay.classList.add('text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
}  

function reset() {
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.classList.remove('text-success', 'text-danger');
    p2Display.classList.remove('text-success', 'text-danger');
}