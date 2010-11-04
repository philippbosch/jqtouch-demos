$.jQTouch({
    icon: 'icon.png',
    icon4: 'icon4.png',
    addGlossToIcon: false,
    startupScreen: 'startup.png',
    statusBar: 'default'
});

$(document).ready(function() {

    // Detect the current position of the device
    function success(position) {
        $('#position').html('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude);
        var mapUrl = 'http://maps.google.com/maps/api/staticmap?center=' + position.coords.latitude + ',' + position.coords.longitude + '&zoom=16&size=320x352&maptype=roadmap&markers=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=false';
        $('#map').html('<img src="' + mapUrl + '">');
    }
    function error(message) {
        $('#position').text("Position kann nicht ermittelt werden.");
    }
    navigator.geolocation.getCurrentPosition(success, error);
    
    // Reload the app when device is turned left and back right. Useful if run in fullscreen mode in simulator.
    $('body').bind('turn', function(e, info) {
        if (info.orientation == "portrait") window.location.reload();
    });
});
