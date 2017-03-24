(function ( $ ) {

    /**
     * Copyright 2017
     * Licensed under the MIT license.
     *
     * @author Jesse Vlasveld
     * @desc A small plugin to create equal height elements
     *     takes a min window width and a source element
     */

    $.fn.equalHeight = function( options ) {

        var settings = $.extend({
            windowWidth: '0',
            source: ''
        }, options );

        var that = this;

        setHeightAuto = function() { $(that).css( 'height', 'auto' ); }
        setHeight = function( height ) { $(that).css( 'height', height ); }
        getSourceHeight = function() { return $(settings.source).height(); }

        $(window).width() > settings.windowWidth ? setHeight(getSourceHeight()) : setHeightAuto();

        $(window).on( 'resize', function () {
            $(window).width() > settings.windowWidth ? setHeight(getSourceHeight()) : setHeightAuto();
        });

    }
})( jQuery );