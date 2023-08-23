let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countDown = 10;
let timerId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;

    if (countDown === 0) {
        timerEl.style.color = "red";
        timerEl.style.fontWeight = "bold";
        timerEl.textContent = "💥💥 BOOM!!💥💥";
        clearInterval(timerId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuserText = defuserEl.value;

    if (event.key === "Enter" && defuserText === "defuser" && countDown !== 0) {

        timerEl.style.fontWeight = "bold";
        timerEl.textContent = "You did it✅";
        clearInterval(timerId);
    }
});