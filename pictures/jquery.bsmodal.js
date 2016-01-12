(function($) {
    $.fn.bsmodal = function(options,element) {
        var settings = $.extend({    
            title: '',
            content:    '',
            buttons: [],
        }, options);
        element = $( element || this.defaultElement || this )[ 0 ];
        this.element = $( element );
        var that = this,
                buttons = settings.buttons;
        this.find('.modal-header).html(settings.title);
        this.find('.modal-body').html(settings.content   this.find('.modal-footer').empty    $.each( buttons, function( name, props ) {
            var click, buttonOptions;
            props = $.isFunction( props ) ?
                { click: props, text: name } :
                props;
            props = $.extend( { type: "button" }, props );
            click = props.click;
            props.click = function() {
                click.apply( that.element[0], arguments );
            };
            buttonOptions = {
                icons: props.icons,
                text: props.showText
            };
            delete props.icons;
            delete props.showText;
            $( '<button></button>', props )
                .addClass('btn')
                .button( buttonOptions )
                .appendTo( that.find('.modal-footer;
        });
        this.modal('show    };
}(jQuery));