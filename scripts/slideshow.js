$(function() {
    $('.bioSlideshow').on('cycle-update-view', function(event, optionHash, slideOptionsHash, currentSlideEl) {
        var navItem = $('.bioSlideshow-navigationItem');
        navItem.removeClass('isActive');
        navItem.eq(optionHash.currSlide).addClass('isActive');
    });
});