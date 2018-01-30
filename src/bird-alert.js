/**
 * @description Exibe uma mensagem na tela
 * @function
 * @public
 */
function BirdAlert(options) {
    "use strict";
    var defaults = {
        duration: 5000,
        position: 'top left',
        notifyLimit: 7,
        zindex: 1000,
        onShow: function () {},
        onHide: function () {}
    },
    positions = {
        'top left': ,
        'top center':,
        'top right':,
        'bottom left':,
        'bottom center':,
        'bottom right':,
    },
    css = {
        'position': 'absolute'
    };

    this.config = function (config) {

    };

    this.notify = function (text) {
        var html = '';

        var el = $('<div class="container-birdAlert animated flipInX hide" data-type="'+tipo+'">'
                 + '  <i class="close-birdAlert fa fa-close fa-fw"></i>'
                 + '  <div class="title-birdAlert">'+title+'</div>'
                 + '  <div class="content-birdAlert">'+msg+'</div>'
                 + '</div>');

        if ($('#birdAlert .container-birdAlert').length >= limit) {
            $('#birdAlert .container-birdAlert:last').remove();
        }
    };

    this.alert = function (text) {

    };







    function html() {
    }




    function hide() {
        el.removeClass('flipInX').addClass('flipOutX');
        el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.remove();
        });
        clearTimeout(el.data('timeOut'));
    }

    el.find('.close-birdAlert').on('click', function () {
        hide();
    });

    el.data('timeOut', setTimeout(function () {
        hide();
    }, 7000));

    el.show();

    // CONSTRUCTOR
    (function () {
        if ($('#birdAlert').length == 0) {
            $('body').append('<div id="birdAlert"></div>');
        }

        options = $.extend({}, defaults, options, typeof options === 'object' && options);
    })();
}