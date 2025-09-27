// Canvas und Kontext initialisieren
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

// Variablen und Einstellungen
let playerImage = document.getElementById('playerImage');
let player, obstacles, collectibles, score, difficulty;
let groundHeight = 50;
let gravity = 0.2;
let collectibleSpawnRate = 20;
let obstacleSpawnRate = 60;
let gameRunning = false;

let platforms = [
    { x: 300, y: 250, width: 100, height: 20 },
    { x: 400, y: 250, width: 100, height: 20 }
];

/* Highscore-Funktionen
function getHighscores() {
    const highscores = localStorage.getItem('highscores');
    return highscores ? JSON.parse(highscores) : [];
}

function saveHighscores(highscores) {
    localStorage.setItem('highscores', JSON.stringify(highscores));
}

function addHighscore(name, score) {
    let highscores = getHighscores();
    highscores.push({ name, score });
    highscores.sort((a, b) => b.score - a.score);
    highscores = highscores.slice(0, 5);
    saveHighscores(highscores);
}

function showHighscores() {
    const highscores = getHighscores();
    const highscoreList = document.getElementById('highscoreList');
    highscoreList.innerHTML = '';
    highscores.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
        highscoreList.appendChild(li);
    });
}*/

// Spiel zurücksetzen
function resetGame() {
    player = {
        x: 50,
        y: 300,
        width: 50,
        height: 50,
        velocityX: 0,
        velocityY: 0,
        speed: 3,
        isJumping: false
    };
    obstacles = [];
    collectibles = [];
    score = 0;
    difficulty = 2;
    /*showHighscores();*/
}

// Spielsteuerung
function startGame() {
    resetGame();
    document.getElementById('newGameButton').style.display = 'none';
    gameRunning = true;
    gameLoop();
}

function gameOver() {
    gameRunning = false;
    const playerName = prompt('Game Over! Dein Name:');
    if (playerName) addHighscore(playerName, score);
    showHighscores();
    alert(`Game Over! Dein Score: ${score}`);
    document.getElementById('newGameButton').style.display = 'block';
}

// Zeichenfunktionen
function drawGround() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
}

function drawPlatforms() {
    ctx.fillStyle = 'green';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function drawObstacles() {
    ctx.fillStyle = 'red';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function drawCollectibles() {
    ctx.fillStyle = 'gold';
    collectibles.forEach(item => {
        if (!item.collected) {
            ctx.fillRect(item.x, item.y, item.width, item.height);
        }
    });
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Score: ${score}`, canvas.width - 10, 30);
}

// Update-Funktionen
function updatePlayer() {
    player.velocityY += gravity;
    player.y += player.velocityY;

    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

    if (player.y + player.height >= canvas.height - groundHeight) {
        player.y = canvas.height - groundHeight - player.height;
        player.velocityY = 0;
        player.isJumping = false;
    }

    platforms.forEach(platform => {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height <= platform.y &&
            player.y + player.height + player.velocityY >= platform.y
        ) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isJumping = false;
        }
    });
}

function updateObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x -= 2 * difficulty;

        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            gameOver();
        }
    });

    obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);
}

function updateCollectibles() {
    collectibles.forEach(item => {
        if (
            player.x < item.x + item.width &&
            player.x + player.width > item.x &&
            player.y < item.y + item.height &&
            player.y + player.height > item.y
        ) {
            if (!item.collected) {
                item.collected = true;
                score += 10;
            }
        }
        item.x -= 1 * difficulty;
    });

    collectibles = collectibles.filter(item => item.x + item.width > 0);
}

function spawnObstacle() {
    const x = canvas.width; // Startpunkt am rechten Rand
    const isTopObstacle = Math.random() < 0.5; // 50% Wahrscheinlichkeit für oberen oder unteren Rand

    let y, height;
    if (isTopObstacle) {
        height = Math.random() * 50 + 120; // Zufällige Höhe
        y = 0; // Am oberen Rand
    } else {
        height = Math.random() * 50 + 100; // Zufällige Höhe
        y = canvas.height - groundHeight - height; // Am unteren Rand
    }

    const width = Math.random() * 30 + 140; // Zufällige Breite

    obstacles.push({ x, y, width, height });
}


function updateScore() {
    score += 1;
    if (score % obstacleSpawnRate === 0) spawnObstacle();
    if (score % collectibleSpawnRate === 0) spawnCollectibles();
}

// Generierungsfunktionen
/*function spawnObstacle() {
    const x = canvas.width;
    const y = canvas.height - groundHeight - 30;
    const width = Math.random() * 30 + 20;
    const height = Math.random() * 50 + 20;
    obstacles.push({ x, y, width, height });
}*/

function spawnCollectibles() {
    const x = Math.random() * (canvas.width * 2) + canvas.width;
    const y = Math.random() * (canvas.height - groundHeight - 30);
    collectibles.push({ x, y, width: 20, height: 20, collected: false });
}

// Spielschleife
function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGround();
    drawPlatforms();
    drawPlayer();
    drawObstacles();
    drawCollectibles();
    drawScore();

    updatePlayer();
    updateObstacles();
    updateCollectibles();
    updateScore();

    requestAnimationFrame(gameLoop);
}

// Tastatursteuerung
document.addEventListener('keydown', e => {
    if (e.code === 'KeyW') player.velocityY = -5;
    if (e.code === 'KeyA') player.x -= player.speed;
    if (e.code === 'KeyD') player.x += player.speed;
    if (e.code === 'KeyS') player.y += player.speed;
});

/* HTML für Highscoreboard hinzufügen
document.body.innerHTML += `
<div id="highscoreBoard" style="margin-top: 20px;">
    <h3>Highscores</h3>
    <ol id="highscoreList"></ol>
</div>
`;*/

// Spiel initialisieren
resetGame();
startGame();
