const clickArea = document.getElementById("click-area");
const timer = document.getElementById("timer");
const time = document.getElementById("time");
const restartButton = document.getElementById("restart-button");
const counter = document.getElementById("counter");
const count = document.getElementById("count");

let clicks = 0;
let timeRemaining = 10;
let intervalId;

clickArea.addEventListener("click", updateClicks);

function updateClicks() {
clicks++;
count.innerHTML = clicks;
}

function startTimer() {
    intervalId = setInterval(function() {
      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        clickArea.style.cursor = "default";
        clickArea.removeEventListener("click", updateClicks);
        const result = clicks;
        clickArea.innerHTML = `Ton score est de ${result} (${result/10} CPS)`;
      } else {
        timeRemaining--;
        time.innerHTML = timeRemaining;
      }
    }, 1000);
  }
  restartButton.addEventListener('click', function() {
    window.location.reload()
  })
clickArea.addEventListener("click", function() {
    
if (!intervalId) {
startTimer();
}
});

