(function ($) {
    'use strict';

    // Plugin default options
    var defaultOptions = {
    };

    // If the plugin is a button
    function buildButtonDef (trumbowyg) {
        return {
            fn: function () {
                // Plugin button logic
                console.log('button clicked');
            }
        }
    }


    $.extend(true, $.trumbowyg, {
        // Add some translations
        langs: {
            en: {
                test: 'Test plugin'
            }
        },
        // Register plugin in Trumbowyg
        plugins: {
            test: {
                // Code called by Trumbowyg core to register the plugin
                init: function (trumbowyg) {
                    // Fill current Trumbowyg instance with the plugin default options
                    console.log('init test pugin123');
                    
                    trumbowyg.o.plugins.test = $.extend(true, {},
                        defaultOptions,
                        trumbowyg.o.plugins.test || {}
                    );

                    var btnDef = {
                        fn: function () {
                            var $modal = trumbowyg.openModal({
                                title: 'A title for modal box',
                                content: '<p>Content in HTML which you want include in created modal box</p>'
                            });
                        }
                    }

                    // If the plugin is a button
                    buildButtonIcon();
                    trumbowyg.addBtnDef('test', buildButtonDef(trumbowyg));
                },
                // Return a list of button names which are active on current element
                tagHandler: function (element, trumbowyg) {
                    return [];
                },
                destroy: function (trumbowyg) {
                }
            }
        }
    })
})(jQuery);