let timer;
let seconds = 0;
let running = false;

const display = document.querySelector('.timer');

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function updateTimer() {
    seconds++;
    display.textContent = seconds < 10 ? `0${seconds} sec` : `${seconds} sec`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
