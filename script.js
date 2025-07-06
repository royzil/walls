document.getElementById('generateButton').addEventListener('click', generateWallpaper);

function generateWallpaper() {
    console.log('Generate Wallpaper button clicked');
    const canvas = document.getElementById('wallpaperCanvas');
    const ctx = canvas.getContext('2d');
    const width = 360; // Standard phone width
    const height = 640; // Standard phone height
    canvas.width = width;
    canvas.height = height;

    // Draw a simple rectangle to ensure the canvas is working
    ctx.fillStyle = '#00796b';
    ctx.fillRect(0, 0, width, height);
}
