const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('.start');
let hourTimer = document.querySelector(".hour");
let minuteTimer = document.querySelector(".minute");
let secondTimer = document.querySelector(".second");
const stopButton = document.querySelector(".stop");
let timerIntervalFunction;


const createTimerAnimator = () => {
    return (seconds) => {
        let startSeconds = seconds;

        timerIntervalFunction = setInterval(() => {

            const hours = Math.floor(startSeconds / 3600);
            const minutes = Math.floor((startSeconds % 3600) / 60);
            const seconds = startSeconds % 60;

            hourTimer.innerHTML = `${hours.toString().padStart(2, '0')}`;
            minuteTimer.innerHTML = `${minutes.toString().padStart(2, '0')}`;
            secondTimer.innerHTML = `${seconds.toString().padStart(2, '0')}`;
            startSeconds++;

            if (startSeconds < 0) {
                clearInterval(timerIntervalFunction);
            }
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    if (seconds <= 0 || isNaN(seconds)) {
        alert('Введите положительное число больше нуля!');
        return;
    }
    animateTimer(seconds);

    inputEl.value = '';
});
//? buttons part
stopButton.addEventListener("click", () => {
    clearInterval(timerIntervalFunction);
    clearFields()


});

function clearFields() {
    hourTimer.innerHTML = "00";
    minuteTimer.innerHTML = "00";
    secondTimer.innerHTML = "00";
}




