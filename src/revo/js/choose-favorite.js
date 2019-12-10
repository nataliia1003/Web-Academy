function chooseFavorite() {
    const leftButton = document.querySelector('.slider-btn.prev-btn');
    const rightButton = document.querySelector('.slider-btn.next-btn');

    const grid = document.querySelector('.grid.slider-grid');
    // grid.style.marginLeft = '0px';

    const sliderWidth = 570;

    const sliderCount = grid.children.length;

    if (sliderCount > 2) {
        rightButton.style.display = 'block';
    }

    let currentSlide = 0;

    leftButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft + sliderWidth + 'px';

        currentSlide -= 1;
        checkButtons();

        grid.children[currentSlide].classList.add('active');
        grid.children[currentSlide + 2].classList.remove('active');
    });

    rightButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft - sliderWidth + 'px';

        currentSlide += 1;
        checkButtons();

        grid.children[currentSlide - 1].classList.remove('active');
        grid.children[currentSlide + 1].classList.add('active');
    });

    function checkButtons() {
        if (currentSlide <= 0) {
            leftButton.style.display = 'none';
        } else {
            leftButton.style.display = 'block';
        }

        if ((currentSlide + 2) >= sliderCount) {
            rightButton.style.display = 'none';
        } else {
            rightButton.style.display = 'block';
        }
    }
}

export { chooseFavorite };