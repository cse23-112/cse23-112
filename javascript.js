document.addEventListener('DOMContentLoaded', (event) => {
    const scrollContainers = [
        { container: document.querySelectorAll('.scroll-content')[0], leftButton: document.getElementById('scroll-left'), rightButton: document.getElementById('scroll-right') },
        { container: document.querySelectorAll('.scroll-content')[1], leftButton: document.getElementById('theater-scroll-left'), rightButton: document.getElementById('theater-scroll-right') }
    ];

    const scrollAmount = 400; // Adjust this value based on the width of your images

    scrollContainers.forEach((scrollObj) => {
        const { container, leftButton, rightButton } = scrollObj;

        leftButton.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        rightButton.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});
