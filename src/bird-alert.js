/**
 * @description Exibe uma mensagem na tela
 * @function
 * @public
 */
function BirdAlert(options) {
    "use strict";

    var _this = this;

    this.element = [];

    var defaults = {
            clickToHide: true,
            autoHide: true,
            duration: 5000,
            className: 'error',
            showAnimation: 'slideInDown',
            showDuration: 400,
            hideAnimation: 'slideOutRight',
            hideDuration: 200,
            position: 'top left',
            quantity: 7,
            width: 400,
            zindex: 1000,
            onShow: function () {},
            onHide: function () {}
        },
        positions = {
            'top left': {'top': '10px', 'left': '10px', 'bottom': 'auto', 'right': 'auto'},
            'top center': {'top': '10px', 'left': '50%', 'bottom': 'auto', 'right': 'auto'},
            'top right': {'top': '10px', 'left': 'auto', 'bottom': 'auto', 'right': '10px'},
            'bottom left': {'top': 'auto', 'left': '10px', 'bottom': '10px', 'right': 'auto'},
            'bottom center': {'top': 'auto', 'left': '50%', 'bottom': '10px', 'right': '0'},
            'bottom right': {'top': 'auto', 'left': 'auto', 'bottom': '10px', 'right': '10px'}
        };
    /*css = {
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

    el.show();*/

    this.notify = function (opt) {
        var html = ''
            + '<div class="container-birdAlert '+(opt.type || "")+'">'
            + '  <i class="close-birdAlert fa fa-close fa-fw"></i>'
            + (opt.title ? '  <div class="title-birdAlert">'+opt.title+'</div>' : '')
            + '  <div class="content-birdAlert">'+opt.msg+'</div>'
            + '</div>';


        if (options.position.search('top') != -1) {
            _this.element.prepend(html);
            if (_this.element.find('.container-birdAlert').length >= options.quantity) {
                _this.element.find('.container-birdAlert:last').remove();
            }

            if (options.autoHide) {
                setTimeout(function () {
                    _this.element.find('.container-birdAlert:last').remove();
                }, options.duration);
            }
        } else {
            _this.element.append(html);
            if (_this.element.find('.container-birdAlert').length >= options.quantity) {
                _this.element.find('.container-birdAlert:first').remove();
            }

            if (options.autoHide) {
                setTimeout(function () {
                    _this.element.find('.container-birdAlert:first').remove();
                }, options.duration);
            }
        }
    };

    // CONSTRUCTOR
    (function () {
        options = $.extend({}, defaults, options, typeof options === 'object' && options);
        var len = $('.birdAlert').length+1;

        $('body').append('<div class="birdAlert" id="birdAlert'+len+'"></div>');

        _this.element = $('#birdAlert'+len);
        _this.element.css(positions[options.position]);
        _this.element.css({'width': options.width+'px'});

        if (options.position == 'top center' || options.position == 'bottom center') {
            _this.element.css({'margin-left': '-'+(options.width/2)+'px'});
        }
    })();
}