(function () {
    var aboutUsSlider = $('.header-slider_about-us');
    aboutUsSlider.on('init', function(event, slick, direction){
        var header = $('.header_about-us')[0];
        header.style.display = 'block';
    });

    aboutUsSlider.slick({
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000
    });
}());
