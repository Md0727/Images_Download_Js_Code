// Function to extract filename from URL
function extractFilename(url) {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

// Function to download image from URL
function downloadImage(url, filename) {
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to download all images from the collection with a delay
function downloadAllImagesWithDelay(delay) {
    const collection = document.querySelectorAll(".kart-imaj img");
    let index = 0;
    const downloadNext = () => {
        if (index < collection.length) {
            const img = collection[index];
            const url = img.src;
            const filename = extractFilename(url);
            downloadImage(url, filename);
            index++;
            setTimeout(downloadNext, delay);
        }
    };
    downloadNext();
}

// Call the function to download all images with a delay between each download (in milliseconds)
downloadAllImagesWithDelay(1000); // Adjust the delay as needed
