const container = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let scrollAmount = 0;

nextButton.addEventListener('click', () => {
    scrollAmount += container.offsetWidth;
    container.scroll({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    scrollAmount -= container.offsetWidth;
    container.scroll({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
