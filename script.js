let score = 0;
let highScore = 0;

let gameRunning = true;

function startGame() {
    if (gameRunning) return;

    score = 0;
    
    gameRunning = true;

    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("timeFill").style.width = "100%";

    
}

function resetGame() {
    
    gameRunning = false;
    score = 0;
   

    document.getElementById("score").textContent = 0;
    document.getElementById("time").textContent = 10;
    document.getElementById("timeFill").style.width = "100%";
    
}

function clickme() {
    if (!gameRunning) return;

    score++;
    document.getElementById("score").textContent = score;
    
    
}

function countdown() {
   
    document.getElementById("time").textContent = timeLeft;

    document.getElementById("timeFill").style.width =
        (timeLeft / 10) * 100 + "%";
}
    if (timeLeft <= 0) {}
        clearInterval(timer);
        gameRunning = false;

        if (score > highScore) {
            highScore = score;
            document.getElementById("highScore").textContent = highScore;
        }
        const msg = document.getElementById("gameMessage");
msg.textContent = "TIME'S UP! 🐶 Final Score: " + score;
msg.style.opacity = "1";timer = setInterval(countdown, 1000);

        
    const colors = [
        "#38bdf8", // blue
        "#22c55e", // green
        "#facc15", // yellow
        "#ec4899", // pink
        "#a855f7", // purple
        "#f97316", // orange
        "#ef4444"  // red
    ];

    const button = document.querySelector("button");
    

    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
           ?  "white"
           : "lightblue"
            
           document.getElementById("gameMessage").style.opacity = "0";

function clickme() {
    score++;
    document.getElementById("score").textContent = score;
}
