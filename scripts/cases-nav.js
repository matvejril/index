(function() {

    // Навешивание событий на навигацию
    var tabLinks = document.querySelectorAll('.case-nav__item');
    var tabContent = document.querySelectorAll('.case-content');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', changeTab);
    }


    function changeTab() {
        var tabClick = this;
        var tabClickData = tabClick.getAttribute('data-nav');
        console.log(tabClickData);
        if (!tabClick.classList.contains('case-nav__item_active')) {
            for (var i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove('case-nav__item_active');
            }
            tabClick.classList.add('case-nav__item_active');
            changeTabContent(tabClickData);
        }
    }

    // Смена контента
    function changeTabContent(data) {
        for (var i = 0; i < tabContent.length; i++) {
            if (tabContent[i].classList.contains('case-content_active')) {
                tabContent[i].classList.remove('case-content_active');
            }
            if (data === tabLinks[i].getAttribute('data-nav')) {
                tabContent[i].classList.add('case-content_active');
            }
        }
    }

    // Смена фона футера
    function changeBg(data) {
        var footerBg = document.querySelector('.footer');
        footerBg.className = 'footer';
        switch (data) {
            case 'main-branding':
                footerBg.classList.add('footer_branding');
                break;
            case 'main-digital':
                footerBg.classList.add('footer_digital');
                break;
            case 'main-strategy':
                footerBg.classList.add('footer_strategy');
                break;
            case 'main-creative':
                footerBg.classList.add('footer_creative');
                break;
            case 'main-academy':
                footerBg.classList.add('footer_academy');
                break;
            default:
                footerBg.className = 'footer';
                footerBg.classList.add('footer_branding');
        }
    }
}());
