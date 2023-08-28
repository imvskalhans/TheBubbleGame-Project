// Creating a function that makes a bubble

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 60; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubbles">${random}</div>`;
  }

  document.querySelector(".bubblebox").innerHTML = clutter;
}

makeBubble();

// Creating a function for the timer

var timer = 30;
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timer == 0) {
    clearInterval(timerId);
    document.querySelector(
      ".bubblebox"
    ).innerHTML = `<div><h1>Times Up :(    Game Over !</h1></div>`;

    setInterval(function () {
      document.querySelector(
        ".bubblebox"
      ).innerHTML = `<div><h1>Your Score is : ${score} </h1></div>`;
    }, 2000);
  } else {
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }
}

// Creating a function for getting new hits

function getNewHits() {
  randomhit = Math.floor(Math.random() * 10);
  document.querySelector("#hits").textContent = randomhit;
}
getNewHits();

// Creating a function for score

var score = 0;
function getScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

// Creating an event listener for the bubbles

document
  .querySelector(".bubblebox")
  .addEventListener("click", function (event) {
    // alert("You clicked on a bubble!");
    var clickednumber = Number(event.target.textContent);
    if (clickednumber === randomhit) {
      getScore();
      makeBubble();
      getNewHits();
    }
  });
