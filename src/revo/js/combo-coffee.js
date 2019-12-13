function comboCoffee() {
    const leftButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__prev-btn');
    const rightButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__next-btn');

    const grid = document.querySelector('.grid.combo-coffee__slider-grid');

    const width = window.innerWidth;
    const sliderWidth = grid.children[0].clientWidth;

    const mediumWidth = 767;
    const smallWidth = 574;

    let slidersPerScreen;

    if (width > mediumWidth) {
        slidersPerScreen = 3;
    } else if (width <= mediumWidth && width > smallWidth) {
        slidersPerScreen = 2;
    } else {
        slidersPerScreen = 1;
    }

    const sliderCount = grid.children.length;

    rightButton.style.display = 'block';

    let currentSlide = 0;

    if (slidersPerScreen === 1) {
        grid.style.marginLeft = ((width - sliderWidth) / 2) + 'px';
    }

    leftButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft + sliderWidth + 'px';

        currentSlide -= 1;
        checkButtons();

        grid.children[currentSlide].classList.add('active');
        grid.children[currentSlide + slidersPerScreen].classList.remove('active');
    });

    rightButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft - sliderWidth + 'px';

        currentSlide += 1;
        checkButtons();

        grid.children[currentSlide - 1].classList.remove('active');
        grid.children[currentSlide + slidersPerScreen - 1].classList.add('active');
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
