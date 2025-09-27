let canvas = document.getElementById('pongCanvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

// Game Variables
let player1Score = 0;
let player2Score = 0;
let currentRound = 1;
let winningScore = 5;

// Paddle Variables
let paddleWidth = 10;
let paddleHeight = 100;
let paddleSpeed = 5;

// Ball Variables
let ballRadius = 10;
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    velocityX: 4,
    velocityY: 4,
    speed: 4
};

// Paddle Positions
let player1 = { x: 0, y: canvas.height / 2 - paddleHeight / 2 };
let player2 = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2 };

// Input Handling
let keysPressed = {};

// Event Listeners
document.addEventListener('keydown', (e) => keysPressed[e.key] = true);
document.addEventListener('keyup', (e) => keysPressed[e.key] = false);

// Game Functions
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.velocityX = -ball.velocityX;
    ball.velocityY = 4 * (Math.random() > 0.5 ? 1 : -1);
}

function updatePaddles() {
    if (keysPressed['w'] && player1.y > 0) player1.y -= paddleSpeed;
    if (keysPressed['s'] && player1.y < canvas.height - paddleHeight) player1.y += paddleSpeed;

    if (keysPressed['ArrowUp'] && player2.y > 0) player2.y -= paddleSpeed;
    if (keysPressed['ArrowDown'] && player2.y < canvas.height - paddleHeight) player2.y += paddleSpeed;
}

// Ball Variation mit x und y Achsenverhalten. (Curve Balls möglich machen) 

/*function updateBall() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Wall Collision
    if (ball.y - ballRadius < 0 || ball.y + ballRadius > canvas.height) {
        ball.velocityY = -ball.velocityY;
    }

    // Paddle Collision
    if (ball.x - ballRadius < player1.x + paddleWidth && 
        ball.y > player1.y && 
        ball.y < player1.y + paddleHeight) {
        ball.velocityX = -ball.velocityX;
        ball.speed += 0.2;
    }

    if (ball.x + ballRadius > player2.x && 
        ball.y > player2.y && 
        ball.y < player2.y + paddleHeight) {
        ball.velocityX = -ball.velocityX;
        ball.speed += 0.8;
    }

    // Scoring
    if (ball.x - ballRadius < 0) {
        player2Score++;
        resetBall();
    }
    if (ball.x + ballRadius > canvas.width) {
        player1Score++;
        resetBall();
    }
}*/

function updateBall() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Wall Collision
    if (ball.y - ballRadius < 0 || ball.y + ballRadius > canvas.height) {
        ball.velocityY = -ball.velocityY;
    }

    // Paddle Collision (Player 1)
    if (ball.x - ballRadius < player1.x + paddleWidth && 
        ball.y > player1.y && 
        ball.y < player1.y + paddleHeight) {
        let relativeIntersectY = (player1.y + paddleHeight / 2) - ball.y;
        let normalizedIntersectY = relativeIntersectY / (paddleHeight / 2);
        let bounceAngle = normalizedIntersectY * Math.PI / 4; // Max Winkel von 45°

        ball.velocityX = Math.abs(ball.velocityX) * 1.1; // Ball wird schneller
        ball.velocityY = ball.speed * -Math.sin(bounceAngle);
    }

    // Paddle Collision (Player 2)
    if (ball.x + ballRadius > player2.x && 
        ball.y > player2.y && 
        ball.y < player2.y + paddleHeight) {
        let relativeIntersectY = (player2.y + paddleHeight / 2) - ball.y;
        let normalizedIntersectY = relativeIntersectY / (paddleHeight / 2);
        let bounceAngle = normalizedIntersectY * Math.PI / 4; // Max Winkel von 45°

        ball.velocityX = -Math.abs(ball.velocityX) * 1.1; // Ball wird schneller
        ball.velocityY = ball.speed * -Math.sin(bounceAngle);
    }

    // Scoring
    if (ball.x - ballRadius < 0) {
        player2Score++;
        resetBall();
    }
    if (ball.x + ballRadius > canvas.width) {
        player1Score++;
        resetBall();
    }
}


function checkWinCondition() {
    if (player1Score >= winningScore || player2Score >= winningScore) {
        alert(`Player ${player1Score >= winningScore ? 1 : 2} wins the game!`);
        player1Score = 0;
        player2Score = 0;
        currentRound = 1;
    }
}

function drawPaddles() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player1.x, player1.y, paddleWidth, paddleHeight);
    ctx.fillRect(player2.x, player2.y, paddleWidth, paddleHeight);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function drawNet() {
    ctx.fillStyle = 'white';
    for (let i = 0; i < canvas.height; i += 20) {
        ctx.fillRect(canvas.width / 2 - 1, i, 2, 10);
    }
}

function drawScores() {
    document.getElementById('score').textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
    document.getElementById('rounds').textContent = `Round: ${currentRound}`;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawNet();
    drawPaddles();
    drawBall();
    drawScores();

    updatePaddles();
    updateBall();
    checkWinCondition();

    if (player1Score + player2Score === currentRound * 2) {
        currentRound++;
    }

    requestAnimationFrame(gameLoop);
}

// Start Game
resetBall();
gameLoop();
