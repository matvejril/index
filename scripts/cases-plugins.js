(function () {
    var socialNetworkSlider = $('.case-social-network__slider');
    if (socialNetworkSlider) {
        socialNetworkSlider.slick({
            autoplay: false,
            arrows: true,
            dots: true
        });
    }

    var advertisingNetworksSlider = $('.advertising-networks__slider');
    if (advertisingNetworksSlider) {
        advertisingNetworksSlider.slick({
            autoplay: false,
            arrows: false,
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
            arrows: false,
            dots: true
        });
    }

    var contextAdvertisingSliderMobile = $('.contextual-advertising__slider-mobile');
    if (contextAdvertisingSliderMobile) {
        contextAdvertisingSliderMobile.slick({
            autoplay: false,
            arrows: false,
            dots: true
        });
    }
}());
