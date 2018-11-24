// define global variales.
var secondsRemaining;
var intervalHandle;

// to reset timer
function resetTimer() {
    clearInterval(intervalHandle);
    // show input area
    document.getElementById("inputArea").style.display = "block";
    // and hide timer again
    document.getElementById("time").style.display = 'none';
    document.getElementById("resetButton").style.display = "none";
}

// function to calcuate time and display it with color changing effect
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
    //change colors for 30 and 10 seconds left.
    if (secondsRemaining <= 30) {
        timeDisplay.style.color = "#ffc107";
    }
    if (secondsRemaining <= 10) {
        timeDisplay.style.color = "#dc3545";
    }
    //finish timer.
    if (secondsRemaining <= 0) {
        timeDisplay.innerHTML = "Finished.";
        timeDisplay.style.color = "#343a40";  
    }
    secondsRemaining--;
}

function startCountdown() {
    // show timer
    document.getElementById("time").style.display = 'block';
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("resetButton").style.opacity = "1";
    var minutes = document.getElementById("minutes").value;
    if (isNaN(minutes)) {
        // hide timer again
        document.getElementById("time").style.display = 'none';
        alert("Please enter a number!");
        document.getElementById("minutes").value = '';
        document.getElementById("resetButton").style.display = "none";
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
    startButton.setAttribute("id", "start");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };

     // reset button create.
     var resetButton = document.createElement("input");
     resetButton.setAttribute("type", "reset");
     resetButton.setAttribute("value", "Reset timer");
     resetButton.onclick = function () {
         resetTimer();
     };

    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").prepend(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
    document.getElementById("resetButton").prepend(resetButton);
    
    // Hide timer section on page load
    document.getElementById("time").style.display = 'none';
    document.getElementById("resetButton").style.display = "none";
};