var secondsRemaining;
var intervalHandle;

// to reset page after countdown
function resetPage() {
    document.getElementById("inputArea").style.display = "block";
    // hide timer again
    document.getElementById("time").style.display = 'none';
}

function tick() {
    var timeDisplay = document.getElementById("time");
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    var message = min + ":" + sec;
    timeDisplay.innerHTML = message;
    
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }

    secondsRemaining--;
}

function startCountdown() {
    // show timer
    document.getElementById("time").style.display = 'block';

    var minutes = document.getElementById("minutes").value;
    if (isNaN(minutes)) {
        // hide timer again
        document.getElementById("time").style.display = 'none';
        alert("Please enter a number!");
        return;
    }
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}

// typical window.onload , as soon as the page is loaded...
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("type", "text");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("required", "");
    inputMinutes.setAttribute("class", "question");
    inputMinutes.setAttribute("autocomplete", "off");

    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").prepend(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
    // Hide timer on page load
    document.getElementById("time").style.display = 'none';
};