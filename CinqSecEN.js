const clickArea = document.getElementById("click-area");
const timer = document.getElementById("timer");
const time = document.getElementById("time");
const restartButton = document.getElementById("restart-button");
const counter = document.getElementById("counter");
const count = document.getElementById("count");

let clicks = 0;
let timeRemaining = 5;
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
        clickArea.innerHTML = `You did ${result} click(s) / (${result/5} CPS)`;
        time.innerHTML = "0"

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

const languageDropdown = document.getElementById("language-dropdown");
languageDropdown.addEventListener("change", function() {
  const selectedLanguage = this.value;
  switch (selectedLanguage) {
    case "en":
      window.location.href = "UneSecEN.html";
      break;
    case "fr":
      window.location.href = "UneSec.html";
      break;
    default:
      break;
  }
});


const timeLink = document.querySelector('.temps');
const timeOptions = document.querySelector('.time-options');
const Clickarea = document.querySelector('click-area');



timeLink.addEventListener('mouseover', function() {
timeOptions.style.display = "block";
clickArea.style.margin = "355px auto"
restartButton.style.top = "500px"
timer.style.top = "330px"

});

timeLink.addEventListener('mouseout', function() {
timeOptions.style.display = "none";
clickArea.style.margin = "300px auto"
restartButton.style.top = "450px"
timer.style.top = "270px"
});


timeOptions.addEventListener('mouseover', function() {
timeOptions.style.display = "block";
clickArea.style.margin = "355px auto"
restartButton.style.top = "500px"
timer.style.top = "330px"
});

timeOptions.addEventListener('mouseout', function() {
timeOptions.style.display = "none";
clickArea.style.margin = "300px auto"
restartButton.style.top = "450px"
timer.style.top = "270px"

});


