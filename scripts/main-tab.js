(function() {

    // Инициализация слика

    var slider = $('.header-slider');
    slider.on('init', function(event, slick, direction){
        var header = $('.header')[0];
        header.style.display = 'block';
    });
    slider.slick({
        arrows: false,
        draggable: false,
        // touchMove: false,
        swipe: false,
        speed: 300
    });

    // Навешивание событий на навигацию

    var tabLinks = document.querySelectorAll('.main-tab__nav-item');
    var tabContent = document.querySelectorAll('.main-tab__content');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', changeTab);
    }

    function changeTab(e) {
        var tabClick = e.target;
        var tabClickData = tabClick.getAttribute('data-tab');
        var tabClickTag = tabClick.tagName;
        var slideIndex = $(tabClick).index();

        if (tabClickTag === "LI" && !tabClick.classList.contains('main-tab__nav-item_active')) {
            for (var i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove('main-tab__nav-item_active');
            }
            tabClick.classList.add('main-tab__nav-item_active');
            slider.slick('slickGoTo', +slideIndex);
            changeTabContent(tabClickData);
            changeBg(tabClickData);
        }
    }

    // Смена контента

    function changeTabContent(data) {
        for (var i = 0; i < tabContent.length; i++) {
            if (tabContent[i].classList.contains('main-tab__content_active')) {
                tabContent[i].classList.remove('main-tab__content_active');
            }
            if (data === tabLinks[i].getAttribute('data-tab')) {
                tabContent[i].classList.add('main-tab__content_active')
            }
        }
    }

    // Смена фона футера

    function changeBg(data) {
        var footerBg = document.querySelector('.footer');

        switch (data) {
            case 'main-branding':
                footerBg.style.backgroundImage = "url(" + footer_images['main-academy']+ ")";
                break;
            case 'main-digital':
                footerBg.style.backgroundImage = "url(" + footer_images['main-digital'] + ")";
                break;
            case 'main-strategy':
                footerBg.style.backgroundImage = "url(" + footer_images['main-strategy'] + ")";
                break;
            case 'main-creative':
                footerBg.style.backgroundImage = "url(" + footer_images['main-creative'] + ")";
                break;
            case 'main-academy':
                footerBg.style.backgroundImage = "url(" + footer_images['main-academy'] + ")";
                break;
            case 'main-brandExp':
                footerBg.style.backgroundImage = "url(" + footer_images['main-brandExp'] + ")";
                break;
            case 'main-videoProd':
                footerBg.style.backgroundImage = "url(" + footer_images['main-videoProd'] + ")";
                break;
            default:
                footerBg.className = 'footer';
                footerBg.style.backgroundImage = "url(" + footer_images['main-academy'] + ")";
        }
    }
}());
