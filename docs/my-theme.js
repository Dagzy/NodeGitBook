// my-theme.js 
require('gitbook', function(gitbook) {
    var FONT_FAMILIES = [
        {
            config: 'sans',
            text: 'Sans',
            id: 0
        },
        {
            config: 'serif',
            text: 'Serif',
            id: 1
        }
    ];
 
    gitbook.events.on('start', function(e, config) {
        // Read configuration 
        var themeConfig = config['my-theme'],
            defaultFont = themeConfig['font-family'];
 
        // Initialize new font families 
        gitbook.fontsettings.setFamilies(FONT_FAMILIES);
        // Set to configured font-family 
        gitbook.fontsettings.setFamily(defaultFont);
    });
});