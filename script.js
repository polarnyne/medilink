//Countdown
let timeSecond = 900;
const timeH = document.querySelector("h1");
const inputLink = document.getElementById("yt-link");
const inputForm = document.getElementById("premeditation");

displayTime(timeSecond);

function playSound() {   
    var beepsound = new Audio(   
    'https://www.soundjay.com/nature/river-6.wav');   
    beepsound.play();   
}

const start = () => {
    inputForm.style.display = "none";

    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond == 0 || timeSecond < 1) {
            endCount();
            clearInterval(countDown);
        }
    }, 1000);
}

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
}

function endCount() {
    window.location.href = inputLink.value;
    timeH.innerHTML = "Time out";
}

