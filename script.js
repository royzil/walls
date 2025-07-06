const generateWallpaperButton = document.getElementById('generate-wallpaper');
const saveWallpaperButton = document.getElementById('save-wallpaper');
const wallpaperCanvas = document.getElementById('wallpaper-canvas');
const ctx = wallpaperCanvas.getContext('2d');

// Set canvas dimensions
wallpaperCanvas.width = window.innerWidth;
wallpaperCanvas.height = window.innerHeight;

// Define color palette
const colors = [
    '#2E865F',
    '#2196F3',
    '#FF9800',
    '#FF69B4',
    '#8BC34A',
    '#03A9F4',
    '#FFC107',
    '#FF6347',
];

// Function to generate random wallpaper
function generateWallpaper() {
    ctx.fillStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.1)`;
    ctx.fillRect(0, 0, wallpaperCanvas.width, wallpaperCanvas.height);

    for (let i = 0; i < 500; i++) {
        const shapeType = Math.random() < 0.5 ? 'circle' : 'rectangle';
        const x = Math.random() * wallpaperCanvas.width;
        const y = Math.random() * wallpaperCanvas.height;
        const size = Math.random() * 50 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];

        if (shapeType === 'circle') {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
        }
    }

    // Show save button
    saveWallpaperButton.style.display = 'block';
}

// Function to save wallpaper
function saveWallpaper() {
    wallpaperCanvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'wallpaper.png';
        link.click();
    });
}

// Add event listeners
generateWallpaperButton.addEventListener('click', generateWallpaper);
saveWallpaperButton.addEventListener('click', saveWallpaper);

// Generate initial wallpaper
generateWallpaper();
