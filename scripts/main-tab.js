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


    // Проверка хеша
    var hashPage = window.location.hash;
    var hashPageValue = hashPage.substring(1);

    if (hashPage) {
        changeTabState()
    } else {
        setDefaultState()
    }

    function setDefaultState() {
        var defaultStateValue = "main-digital";
        setHash(defaultStateValue);
        changeTabSlide(defaultStateValue);
        changeTabContent(defaultStateValue);
        // changeTabFooter(defaultStateValue);
    }

    // Навешивание событий на навигацию
    var tabLinks = document.querySelectorAll('.main-tab__nav-item');
    var tabContent = document.querySelectorAll('.main-tab__content');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', changeTabState);
    }

    function changeTabState(e) {
        var tabLinks = document.querySelectorAll('.main-tab__nav-item');
        var tabClickHash = 'main-' + hashPageValue;
        for (var m = 0; m < tabLinks.length; m++) {
            tabLinks[m].classList.remove('main-tab__nav-item_active');
            var tabClickData = tabLinks[m].getAttribute('data-tab');
            if (tabClickHash === tabClickData) {
                tabLinks[m].classList.add('main-tab__nav-item_active');
                changeTabSlide(tabClickData);
                changeTabContent(tabClickData);
                // changeTabFooter(tabClickData);
            }
        }
        if (e) {
            var tabClick = e.target;
            tabClickData = tabClick.getAttribute('data-tab');
            var tabClickTag = tabClick.tagName;

            setHash(tabClickData);

            if (tabClickTag === "LI" && !tabClick.classList.contains('main-tab__nav-item_active')) {
                for (var i = 0; i < tabLinks.length; i++) {
                    tabLinks[i].classList.remove('main-tab__nav-item_active');
                }
                tabClick.classList.add('main-tab__nav-item_active');
                console.log(tabClickData);
                changeTabSlide(tabClickData);
                changeTabContent(tabClickData);
                // changeTabBg(tabClickData);
            }
        }
    }

    function setHash(value) {
        var hashValue = value.replace("main-","#");
        history.pushState('', document.title, hashValue);
    }

    // Смена контента
    function changeTabContent(data) {
        var tabContent = document.querySelectorAll('.main-tab__content');
        var tabLinks = document.querySelectorAll('.main-tab__nav-item');
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
                slideIndex = 1;
                break;
            case 'main-digital':
                slideIndex = 2;
                break;
            case 'main-strategy':
                slideIndex = 3;
                break;
            case 'main-creative':
                slideIndex = 4;
                break;
            case 'main-academy':
                slideIndex = 5;
                break;
            case 'main-brandExp':
                slideIndex = 6;
                break;
            case 'main-videoProd':
                slideIndex = 7;
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
                footerBg.style.backgroundImage = "url(" + footer_images['main-digital'] + ")";
        }
    }
}());
