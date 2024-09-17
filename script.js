// Get the trophy image element
const trophyImage = document.querySelector('img[alt="GitHub Stats"]');

// Calculate the available width for the trophy image
const availableWidth = trophyImage.parentElement.offsetWidth;

// Set the trophy image width and height based on the available space
trophyImage.style.width = availableWidth + 'px';
trophyImage.style.height = 'auto';
