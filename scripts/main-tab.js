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
        swipe: false,
        speed: 300
    });


    var tabLinks = document.querySelectorAll('.main-tab__nav-item');
    var tabContent = document.querySelectorAll('.main-tab__content');

    var hashPage = window.location.hash;

    // Навешивание событий на навигацию
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', changeTabState);
    }

    // Проверка хеша
    if (hashPage) {
        transitionTabState(hashPage);
    } else {
        setDefaultState()
    }

    function setDefaultState() {
        var defaultStateValue = "main-digital";
        document.querySelector('.main-tab__nav-item_digital').classList.add('main-tab__nav-item_active');
        setHash(defaultStateValue);
        changeTabSlide(defaultStateValue);
        changeTabContent(defaultStateValue);
        changeTabFooter(defaultStateValue);
    }

    function transitionTabState(hashPage) {
        var getTabStateValue = hashPage.replace("#","main-");
        // console.log(getTabStateValue);
        for (var m = 0; m < tabLinks.length; m++) {
            tabLinks[m].classList.remove('main-tab__nav-item_active');
            var tabOverlapData = tabLinks[m].getAttribute('data-tab');
            if (getTabStateValue === tabOverlapData) {
                tabLinks[m].classList.add('main-tab__nav-item_active');
                changeTabSlide(getTabStateValue);
                changeTabContent(getTabStateValue);
                changeTabFooter(getTabStateValue);
            }
        }
    }

    function changeTabState(e) {
        var tabClick = e.target;
        var tabClickValue = tabClick.getAttribute('data-tab');
        var tabClickTag = tabClick.tagName;
        setHash(tabClickValue);
        if (tabClickTag === "LI" && !tabClick.classList.contains('main-tab__nav-item_active')) {
            for (var i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove('main-tab__nav-item_active');
            }
            tabClick.classList.add('main-tab__nav-item_active');
            changeTabSlide(tabClickValue);
            changeTabContent(tabClickValue);
            changeTabFooter(tabClickValue);
        }
    }

    function setHash(value) {
        var hashValue = value.replace("main-","#");
        history.pushState('', document.title, hashValue);
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

    // Смена слайдера
    function changeTabSlide(tabClickData) {
        var slideIndex;
        switch (tabClickData) {
            case 'main-branding':
                slideIndex = 0;
                break;
            case 'main-digital':
                slideIndex = 1;
                break;
            case 'main-strategy':
                slideIndex = 2;
                break;
            case 'main-creative':
                slideIndex = 3;
                break;
            case 'main-academy':
                slideIndex = 4;
                break;
            case 'main-brandExp':
                slideIndex = 5;
                break;
            case 'main-videoProd':
                slideIndex = 6;
                break;
        }
        // console.log(slideIndex);
        slider.slick('slickGoTo', slideIndex);
    }

    // Смена фона футера
    function changeTabFooter(data) {
        var footerBg = document.querySelector('.footer');
        switch (data) {
            case 'main-branding':
                footerBg.style.backgroundImage = "url(" + footer_images['main-branding']+ ")";
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
                footerBg.style.backgroundImage = "url(" + footer_images['main-digital'] + ")";
        }
    }
}());
