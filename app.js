$.jQTouch({
    icon: 'icon.png',
    icon4: 'icon4.png',
    addGlossToIcon: false,
    startupScreen: 'startup.png',
    statusBar: 'default',
    useTouch: false
});

$(document).ready(function() {
    // Reload the app when device is turned left and back right. Useful if run in fullscreen mode in simulator.
    $('body').bind('turn', function(e, info) {
        if (info.orientation == "portrait") window.location.reload();
    });
});
