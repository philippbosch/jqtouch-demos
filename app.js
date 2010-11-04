var jQT = $.jQTouch({
    icon: 'icon.png',
    icon4: 'icon4.png',
    addGlossToIcon: false,
    startupScreen: 'startup.png',
    statusBar: 'default'
});

$(document).ready(function() {
    // Load recently uploaded Flickr images
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&per_page=20&extras=url_sq,url_z&api_key=c5f8fb0e77ad648624b8813aa00e8e47&jsoncallback=?', function(data) {
        $.each(data.photos.photo, function(num,photo) {
            var img = $('<img src="' + photo.url_sq + '" data-largeurl="' + photo.url_z + '">');
            $(img).bind('click', function(e) {
                e.preventDefault();
                $('#large-image').html('<img src="' + photo.url_z + '">');
                jQT.goTo('#defails', 'fade');
            });
            $('#photos').append(img);
        });
    });
    
    // Reload the app when device is turned left and back right. Useful if run in fullscreen mode in simulator.
    $('body').bind('turn', function(e, info) {
        if (info.orientation == "portrait") window.location.reload();
    });
});
