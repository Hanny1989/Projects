const cube = document.getElementById('cube');
let isDragging = false;
let startX, startY;
let rotationX = 0, rotationY = 0;

// Mouse down event
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

// Mouse move event
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        startX = e.clientX;
        startY = e.clientY;

        rotationY += deltaX * 0.5; // Adjust sensitivity
        rotationX -= deltaY * 0.5; // Adjust sensitivity

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
});

// Mouse up event
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Touch support for mobile
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    startX = touch.clientX;
    startY = touch.clientY;

    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});