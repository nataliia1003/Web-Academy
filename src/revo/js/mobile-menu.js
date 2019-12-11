function mobileMenu() {
    const menuButton = document.querySelector('.btn-mobile-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    });
}

export { mobileMenu };
