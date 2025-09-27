const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

// Game variables
let player = { x: 50,
     y: 300,
      width: 50,
       height: 50, 
       dx: 0, 
       dy: 0, 
       speed: 4,
       jumpPower: 15,
       jumps: 2, 
       onGround:false, 
       color: 'red',
        velocityY: 0,
         isJumping: false };
let groundHeight = 10;
let gravity = 0.5;
let platforms = [{ x: 300, y: 250, width: 100, height: 20 }];
let collectibles = [{ x: 350, y: 200, width: 20, height: 20, collected: false }];
let score = 0;


//Tastarusteuerung
let keys = {};
window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);


// Aktualisiere den Spielzustand
function update() {
    // Spielerbewegung
    if (keys['w'] && player.jumps > 0) {
        player.dy = -player.jumpPower;
        player.jumps--;
        player.onGround = false;
        player.color = 'red'; // Farbe ändern während des Sprungs
    }}

    player.dy += gravity; // Gravitation
    player.y += player.dy;

    // Spieler auf den Boden setzen
    if (player.y + player.height > ground.y) {
        player.y = ground.y - player.height;
        player.dy = 0;
        player.onGround = true;
        player.jumps = 2; // Sprungladungen zurücksetzen
        player.color = 'blue'; // Farbe zurücksetzen
    }

    // Plattform-Kollision und Spieler auf Plattform setzen
    player.onGround = false;
    platforms.forEach((platform) => {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y < platform.y + platform.height &&
            player.dy >= 0
        ) {
            player.y = platform.y - player.height;
            player.dy = 0;
            player.onGround = true;
            player.jumps = 2; // Sprungladungen zurücksetzen
            player.color = 'blue'; // Farbe zurücksetzen
        }
    });
    



function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawPlatforms() {
    ctx.fillStyle = 'green';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
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

function drawGround() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
}

function updatePlayer() {
    player.velocityY += gravity;
    player.y += player.velocityY;

    // Prevent player from falling through the ground
    if (player.y + player.height >= canvas.height - groundHeight) {
        player.y = canvas.height - groundHeight - player.height;
        player.isJumping = false;
    }

    // Platform collision
    platforms.forEach(platform => {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height <= platform.y &&
            player.y + player.height + player.velocityY >= platform.y
        ) {
            player.y = platform.y - player.height;
            player.isJumping = false;
            player.velocityY = 0;
        }
    });
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
    });
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGround();
    drawPlatforms();
    drawCollectibles();
    drawPlayer();
    drawScore();

    updatePlayer();
    updateCollectibles();

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', e => {
    if (e.code === 'Space' && !player.isJumping) {
        player.velocityY = -15;
        player.isJumping = true;
    }
});

// Start the game loop
gameLoop();