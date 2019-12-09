function giftset() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanels = document.querySelectorAll('.giftset__tab-content');

    for (let i = 0; i < tabLinks.length; i += 1) {
        tabLinks[i].addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        for (let i = 0; i < tabLinks.length; i += 1) {
            tabLinks[i].classList.remove('active');
        }

        event.currentTarget.classList.add('active');


        const index = [].indexOf.call(tabLinks, event.currentTarget);

        for (let i = 0; i < tabPanels.length; i += 1) {
            tabPanels[i].classList.remove('active');
        }

        tabPanels[index].classList.add('active');
    }
}

export { giftset };
