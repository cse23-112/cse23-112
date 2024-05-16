const scrollContainer = document.querySelector('.scroll-content');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

const scrollAmount = 400; // Adjust this value based on the width of your images

scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
