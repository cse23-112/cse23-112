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




// movies page js

document.addEventListener('DOMContentLoaded', () => {
    const bollywoodContainer = document.getElementById('bollywood-container');
    const bollywoodContent = bollywoodContainer.querySelector('.scroll-content');
    const bollywoodScrollLeftButton = bollywoodContainer.querySelector('#bollywood-scroll-left');
    const bollywoodScrollRightButton = bollywoodContainer.querySelector('#bollywood-scroll-right');

    const trendingContainer = document.getElementById('trending-container');
    const trendingContent = trendingContainer.querySelector('.scroll-content');
    const trendingScrollLeftButton = trendingContainer.querySelector('#trending-scroll-left');
    const trendingScrollRightButton = trendingContainer.querySelector('#trending-scroll-right');

    const collectionContainer = document.getElementById('collection-container');
    const collectionContent = collectionContainer.querySelector('.scroll-content');
    const collectionScrollLeftButton = collectionContainer.querySelector('#collection-scroll-left');
    const collectionScrollRightButton = collectionContainer.querySelector('#collection-scroll-right');

    const scrollAmount = 400; // Adjust this value based on the width of your images

    bollywoodScrollLeftButton.addEventListener('click', () => {
        bollywoodContent.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    bollywoodScrollRightButton.addEventListener('click', () => {
        bollywoodContent.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    trendingScrollLeftButton.addEventListener('click', () => {
        trendingContent.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    trendingScrollRightButton.addEventListener('click', () => {
        trendingContent.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    collectionScrollLeftButton.addEventListener('click', () => {
        collectionContent.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    collectionScrollRightButton.addEventListener('click', () => {
        collectionContent.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

