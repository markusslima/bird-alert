/**
 * @description Exibe uma mensagem na tela
 * @function
 * @public
 */
function BirdAlert(options) {
    "use strict";

    this.defaults = {
        clickToHide: true,
        autoHide: true,
        duration: 5000,
        className: 'error',
        showAnimation: 'slideInDown',
        hideAnimation: 'slideOutRight',
        position: 'top left',
        quantity: 7,
        agroup: true,
        width: 400,
        zIndex: 1000,
        onShow: function () {},
        onHide: function () {}
    };

    var _this = this,
    positions = {
        'top left': {'top': '10px', 'left': '10px', 'bottom': 'auto', 'right': 'auto'},
        'top center': {'top': '10px', 'left': '50%', 'bottom': 'auto', 'right': 'auto'},
        'top right': {'top': '10px', 'left': 'auto', 'bottom': 'auto', 'right': '10px'},
        'bottom left': {'top': 'auto', 'left': '10px', 'bottom': '10px', 'right': 'auto'},
        'bottom center': {'top': 'auto', 'left': '50%', 'bottom': '10px', 'right': '0'},
        'bottom right': {'top': 'auto', 'left': 'auto', 'bottom': '10px', 'right': '10px'}
    };

    this.element = [];

    this.notify = function (opt) {
        var el = $('<div class="container-birdAlert animated flipInX '+(opt.type || "")+'">'
                   + '  <i class="close-birdAlert fa fa-close fa-fw"></i>'
                   + (opt.title ? '  <div class="title-birdAlert">'+opt.title+'</div>' : '')
                   + '  <div class="content-birdAlert">'+opt.msg+'</div>'
                   + '</div>');

        if (options.position.search('top') != -1) {
            _this.element.prepend(el);
            if (options.agroup) {
                if (_this.element.find('.container-birdAlert').length >= options.quantity) {
                    _this.element.find('.container-birdAlert:last').remove();
                }
            } else {
                if (_this.element.find('.container-birdAlert').length >= 2) {
                    _this.element.find('.container-birdAlert:last').remove();
                }
            }
        } else {
            _this.element.append(el);
            if (options.agroup) {
                if (_this.element.find('.container-birdAlert').length >= options.quantity) {
                    _this.element.find('.container-birdAlert:first').remove();
                }
            } else {
                if (_this.element.find('.container-birdAlert').length >= 2) {
                    _this.element.find('.container-birdAlert:first').remove();
                }
            }
        }

        if (options.autoHide) {
            el.data('timeOut', setTimeout(function () {
                hideElement(el);
            }, options.duration));
        }

        if (options.clickToHide) {
            el.on('click', function () {
                hideElement($(this));
            });
        }
    };

    var hideElement = function (el) {
        el.removeClass('flipInX').addClass('flipOutX');
        el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.remove();
        });
        clearTimeout(el.data('timeOut'));
    };

    // CONSTRUCTOR
    (function () {
        options = $.extend({}, defaults, options, typeof options === 'object' && options);
        var len = $('.birdAlert').length+1;
        _this.element = $('<div class="birdAlert"></div>');
        $('body').append(_this.element);
        _this.element.css(positions[options.position]);
        _this.element.css({'width': options.width+'px'});

        if (options.position == 'top center' || options.position == 'bottom center') {
            _this.element.css({'margin-left': '-'+(options.width/2)+'px'});
        }

        _this.element.css({'z-index': options.zIndex });
    })();
}