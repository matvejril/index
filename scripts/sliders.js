(function () {
    // main about us slider
    var aboutUsSlider = $('.header-slider_about-us');
    aboutUsSlider.on('init', function(event, slick, direction){
        var header = $('.header_about-us')[0];
        // header.style.display = 'block';
        header.style.visibility = "visible";
    });
    aboutUsSlider.slick({
        arrows: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 4000
    });

    var socialNetworkSlider = $('.case-social-network__slider');
    if (socialNetworkSlider) {
        socialNetworkSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var socialAdvFormarSlidrMobile = $('.social-adv-format__slider-mobile');
    if (socialAdvFormarSlidrMobile) {
        socialAdvFormarSlidrMobile.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var advertisingContextSlider = $('.adv-con__slider');
    if (advertisingContextSlider) {
        advertisingContextSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var advertisingNetworksSlider = $('.advertising-networks__slider');
    if (advertisingNetworksSlider) {
        advertisingNetworksSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var caseMediaAdvertisingSlider = $('.case-media-advertising__slider');
    if (caseMediaAdvertisingSlider) {
        caseMediaAdvertisingSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var socialAdvFormatSlider = $('.social-adv-format__slider');
    if (socialAdvFormatSlider) {
        socialAdvFormatSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var contextAdvertisingSliderPc = $('.contextual-advertising__slider-pc');
    if (contextAdvertisingSliderPc) {
        contextAdvertisingSliderPc.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var contextAdvertisingSliderMobile = $('.contextual-advertising__slider-mobile');
    if (contextAdvertisingSliderMobile) {
        contextAdvertisingSliderMobile.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var caseBannersSlider = $('.case-banners__slider');
    if (caseBannersSlider) {
        caseBannersSlider.slick({
            arrows: false,
            // centerMode: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    }

}());
