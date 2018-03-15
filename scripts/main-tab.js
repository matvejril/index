(function() {
    // Инициализация слика
    var slider = $('.header-slider');

    slider.on('init', function(event, slick, direction){
        var header = $('.header')[0];
        header.style.visibility = 'visible';
    });
    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        slider.slick('slickSetOption', 'speed', '300');
    });
    slider.slick({
        arrows: false,
        draggable: false,
        swipe: false,
        speed: 0
    });

    var tabLinks = document.querySelectorAll('.main-tab__nav-item');
    var tabContent = document.querySelectorAll('.main-tab__content');

    var hashPage = window.location.hash;


    function goToServices() {
        var tabContent = document.querySelector('.main-tab__content');
        if (tabContent) {
            // var y = tabContent.clientY;
            // console.log(y);
            var top = document.querySelector('.header').getBoundingClientRect().height;
            console.log(top);
            window.scrollTo(0, top);
        }
    }

    // Навешивание событий на навигацию
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', changeTabState);
    }

    // Проверка хеша
    if (hashPage) {
        var externalTransition = localStorage.getItem('externalTransition');
        if (externalTransition) {
            goToServices();
            localStorage.removeItem('externalTransition');
        }
        transitionTabState(hashPage);
    } else {
        if (document.querySelector('.main-tab__nav')) {
            setDefaultState()
        }
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
