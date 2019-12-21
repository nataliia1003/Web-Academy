function chooseFavorite() {
    const leftButton = document.querySelector('.slider-btn.prev-btn');
    const rightButton = document.querySelector('.slider-btn.next-btn');

    const grid = document.querySelector('.grid.slider-grid');

    const width = window.innerWidth;

    const mediumWidth = 1162;
    const smallWidth = 585;

    const largeSliderWidth = 570;
    const smallSliderWidth = grid.children[0].clientWidth / 2;


    let screenSize;
    let sliderWidth;
    let slidersPerScreen;

    if (width > mediumWidth) {
        screenSize = 'large';
        sliderWidth = largeSliderWidth;
        slidersPerScreen = 2;
    } else if (width <= mediumWidth && width > smallWidth) {
        screenSize = 'medium';
        sliderWidth = largeSliderWidth;
        slidersPerScreen = 1;
    } else {
        screenSize = 'small';
        sliderWidth = smallSliderWidth;
        slidersPerScreen = 1;
    }

    let sliderCount = grid.children.length;
    if (screenSize === 'small') {
        sliderCount *= 2;
    }

    rightButton.style.display = 'block';

    let currentSlide = 0;
    getSlide(currentSlide).classList.add('active');
    if (screenSize === 'large') {
        getSlide(currentSlide + 1).classList.add('active');
    }

    leftButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft + sliderWidth + 'px';

        currentSlide -= 1;
        checkButtons();

        getSlide(currentSlide).classList.add('active');
        if (screenSize === 'large') {
            getSlide(currentSlide + 2).classList.remove('active');
        } else {
            getSlide(currentSlide + 1).classList.remove('active');
        }
    });

    rightButton.addEventListener('click', function () {
        grid.style.marginLeft = grid.offsetLeft - sliderWidth + 'px';

        currentSlide += 1;
        checkButtons();

        getSlide(currentSlide - 1).classList.remove('active');
        if (screenSize === 'large') {
            getSlide(currentSlide + 1).classList.add('active');
        } else {
            getSlide(currentSlide).classList.add('active');
        }
    });

    function checkButtons() {
        if (currentSlide <= 0) {
            leftButton.style.display = 'none';
        } else {
            leftButton.style.display = 'block';
        }

        if ((currentSlide + slidersPerScreen) >= sliderCount) {
            rightButton.style.display = 'none';
        } else {
            rightButton.style.display = 'block';
        }
    }

    function getSlide(number) {
        if (screenSize !== 'small') {
            return grid.children[number];
        } else {
            return grid.children[Math.floor(number/2)].children[number%2];
        }
    }
}

export { chooseFavorite };