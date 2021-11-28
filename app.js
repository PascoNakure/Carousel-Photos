const carouselAllButtons = document.querySelectorAll('[data-carousel-button]');

carouselAllButtons.forEach(button => {
    //add event listener to each button
    button.addEventListener('click', () => {
        //grabing data carousel button value if it's equal to next add 1 or prev substract 1
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;

        //with closest() we grab parent Element and after select the children we want
        const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');

        //finding indexOf current activeSlide add offset(prev || next )
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});
