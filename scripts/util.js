function getYear(el) {
    var d = new Date();
    var n = d.getFullYear();
    el.html(n);
}

function cookieGet(name) {
    var allCookies = document.cookie.replace(/ /g, '').split(';');
    for (var i = 0; i < allCookies.length; i++) {
        var thisCookie = allCookies[i].split('=');
        if (thisCookie[0] === name) {
            return thisCookie[1];
        }
    }
    return '';
}

function cookieSet(name, value, expiryDate) {
    if (!expiryDate) {
        expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    }
    document.cookie = name + '=' + value + '; expires=' + expiryDate.toUTCString();
}

$(function() {
    // Copyright year
    getYear($('#year'));

    // Old browser message management
    $('.bioBrowser .bioBrowser-closeButton').on('click', function() {
        cookieSet('oldBrowserAgreement', 'true');
        $('.bioBrowser').hide();
    });
    if (cookieGet('oldBrowserAgreement') === 'true') {
        $('.bioBrowser').hide();
    }
});