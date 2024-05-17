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
    
    const trendingContainer = document.getElementById('trending-container');
    const trendingContent = trendingContainer.querySelector('.scroll-content');
    const trendingScrollLeftButton = trendingContainer.querySelector('#trending-scroll-left');
    const trendingScrollRightButton = trendingContainer.querySelector('#trending-scroll-right');

    const collectionContainer = document.getElementById('collection-container');
    const collectionContent = collectionContainer.querySelector('.scroll-content');
    const collectionScrollLeftButton = collectionContainer.querySelector('#collection-scroll-left');
    const collectionScrollRightButton = collectionContainer.querySelector('#collection-scroll-right');

    const scrollAmount = 400; // Adjust this value based on the width of your images


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



// TV SHOWS JS

document.addEventListener('DOMContentLoaded', () => {
    const kidsContainer = document.getElementById('kids-container');
    const kidsContent = kidsContainer.querySelector('.scroll-content');
    const kidsScrollLeftButton = kidsContainer.querySelector('#kids-scroll-left');
    const kidsScrollRightButton = kidsContainer.querySelector('#kids-scroll-right');

    const favouritesContainer = document.getElementById('favourites-container');
    const favouritesContent = favouritesContainer.querySelector('.scroll-content');
    const favouritesScrollLeftButton = favouritesContainer.querySelector('#favourites-scroll-left');
    const favouritesScrollRightButton = favouritesContainer.querySelector('#favourites-scroll-right');

   
    const scrollAmount = 400; // Adjust this value based on the width of your images

    kidsScrollLeftButton.addEventListener('click', () => {
        kidsContent.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    kidsScrollRightButton.addEventListener('click', () => {
        kidsContent.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    favouritesScrollLeftButton.addEventListener('click', () => {
        favouritesContent.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    favouritesScrollRightButton.addEventListener('click', () => {
        favouritesContent.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

});


