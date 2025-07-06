const generateWallpaperButton = document.getElementById('generate-wallpaper');
const wallpaperCanvas = document.getElementById('wallpaper-canvas');
const ctx = wallpaperCanvas.getContext('2d');

// Set canvas dimensions
wallpaperCanvas.width = window.innerWidth;
wallpaperCanvas.height = window.innerHeight;

// Define color palette
const primaryColor = '#2E865F';
const secondaryColor = '#2196F3';
const backgroundColor = '#333333';
const accentColor = '#444444';

// Function to generate random wallpaper
function generateWallpaper() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, wallpaperCanvas.width, wallpaperCanvas.height);

    // Draw random shapes
    for (let i = 0; i < 100; i++) {
        const shapeType = Math.random() < 0.5 ? 'circle' : 'rectangle';
        const x = Math.random() * wallpaperCanvas.width;
        const y = Math.random() * wallpaperCanvas.height;
        const size = Math.random() * 50 + 10;

        if (shapeType === 'circle') {
            ctx.fillStyle = Math.random() < 0.5 ? primaryColor : secondaryColor;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            ctx.fillStyle = accentColor;
            ctx.fillRect(x, y, size, size);
        }
    }
}

// Add event listener to generate wallpaper button
generateWallpaperButton.addEventListener('click', generateWallpaper);

// Generate initial wallpaper
generateWallpaper();

