// Script for the full screen image.
document.addEventListener('DOMContentLoaded', function() {
    // Define constants and variables
    const images = document.querySelectorAll('.gallery img');
    const fullScreenViewer = document.createElement('div');
    const fullScreenImage = document.createElement('img');
    const closeButton = document.createElement('span');
    const prevButton = document.createElement('span');
    const nextButton = document.createElement('span');
    let currentIndex = 0;

    // Adding classes
    fullScreenViewer.classList.add('full-screen-viewer');
    closeButton.classList.add('close-button');
    prevButton.classList.add('prev-button');
    nextButton.classList.add('next-button');

    // Graphics
    closeButton.innerHTML = '&times;';
    prevButton.innerHTML = '&#10094;';
    nextButton.innerHTML = '&#10095;';

    // children for fullScreenViewer
    fullScreenViewer.appendChild(fullScreenImage);
    fullScreenViewer.appendChild(closeButton);
    fullScreenViewer.appendChild(prevButton);
    fullScreenViewer.appendChild(nextButton);
    document.body.appendChild(fullScreenViewer);

    // Set up Functions
    function openFullScreen(index) {
        currentIndex = index;
        fullScreenImage.src = images[currentIndex].src;
        fullScreenViewer.style.display = 'flex';
    }

    function closeFullScreen() {
        fullScreenViewer.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        fullScreenImage.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        fullScreenImage.src = images[currentIndex].src;
    }

    // Making the on-click function/full screen
    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            openFullScreen(index);
        });
    });

    // On-click events
    closeButton.addEventListener('click', closeFullScreen);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    fullScreenViewer.addEventListener('click', (e) => {
        if (e.target === fullScreenViewer) {
            closeFullScreen();
        }
    });
});
