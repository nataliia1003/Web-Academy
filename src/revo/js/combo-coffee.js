function comboCoffee() {
    const leftButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__prev-btn');
    const rightButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__next-btn');

    const grid = document.querySelector('.grid.combo-coffee__slider-grid');
    grid.style.marginLeft = '0px';

    const sliderWidth = 380;

    const sliderCount = grid.children.length;

    if (sliderCount > 3) {
        rightButton.style.display = 'block';
    }

    let currentSlide = 0;

    leftButton.addEventListener('click', function () {
        grid.style.marginLeft = parseInt(grid.style.marginLeft, 10) + sliderWidth + 'px';

        currentSlide -= 1;
        checkButtons();

        grid.children[currentSlide].classList.add('active');
        grid.children[currentSlide + 3].classList.remove('active');
    });

    rightButton.addEventListener('click', function () {
        grid.style.marginLeft = parseInt(grid.style.marginLeft, 10) - sliderWidth + 'px';

        currentSlide += 1;
        checkButtons();

        grid.children[currentSlide - 1].classList.remove('active');
        grid.children[currentSlide + 2].classList.add('active');
    });

    function checkButtons() {
        if (currentSlide <= 0) {
            leftButton.style.display = 'none';
        } else {
            leftButton.style.display = 'block';
        }

        if ((currentSlide + 3) >= sliderCount) {
            rightButton.style.display = 'none';
        } else {
            rightButton.style.display = 'block';
        }
    }
}

export { comboCoffee };
