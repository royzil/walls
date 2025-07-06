document.getElementById('generateButton').addEventListener('click', generateWallpaper);

function generateWallpaper() {
    console.log('Generate Wallpaper button clicked');
    const canvas = document.getElementById('wallpaperCanvas');
    const ctx = canvas.getContext('2d');
    const width = 360; // Standard phone width
    const height = 640; // Standard phone height
    canvas.width = width;
    canvas.height = height;

    // Generate random colors
    const backgroundColor = getRandomColor();
    const gradientColor1 = getRandomColor();
    const gradientColor2 = getRandomColor();
    const blurAmount = Math.random() * 10; // Random blur amount

    // Draw background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Apply Gaussian blur
    ctx.filter = `blur(${blurAmount}px)`;

    // Draw gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, gradientColor1);
    gradient.addColorStop(1, gradientColor2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw material design elements
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.fillText('Material Design', 50, 50);

    ctx.beginPath();
    ctx.arc(180, 320, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#00796b';
    ctx.fill();
}

function getRandomColor() {
    const colors = [
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695c',
        '#00796b', '#009688', '#004d40', '#00695c', '#00796b', '#009688', '#004d40', '#00695
        
