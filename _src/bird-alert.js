/*
 * bird-alert
 * doc: http://markusslima.github.io/bird-alert/
 * github: https://github.com/markusslima/bird-alert
 *
 * Copyright (c) 2018 Markus Vinicius da Silva Lima
 * Version 1.0.0
 * Licensed under the MIT license.
 */
function BirdAlert(options) {
    "use strict";

    var _this = this,

    defaults = {
        clickToHide: true,
        closeButton: true,
        autoHide: true,
        duration: 5000,
        showAnimation: 'flipInX',
        hideAnimation: 'flipOutX',
        inverseInsert: false,
        preventDuplicate: false,
        position: 'top right',
        quantity: 7,
        agroup: true,
        width: 400,
        zIndex: 1000,
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

    this.element = [];

    this.notify = function (param) {
        var flag = false;
        if (options.preventDuplicate) {
            _this.element.find('.container-birdAlert').each(function () {
                if ($(this).find('.content-birdAlert').html() == param.msg && $(this).hasClass(param.className)) {
                    flag = true;
                }
            });
        }

        if (flag) {
            return false;
        }

        var el = $('<div class="container-birdAlert animated '+options.showAnimation+' '+(param.className || '')+'">' +
                   (options.closeButton ? '  <i class="close-birdAlert">+</i>' : '') +
                   (param.title ? '  <div class="title-birdAlert">'+param.title+'</div>' : '') +
                   '  <div class="content-birdAlert">'+param.msg+'</div>' +
                   '</div>');

        if (options.position.search('top') != -1) {
            if (!options.inverseInsert) {
                _this.element.prepend(el);
            } else {
                _this.element.append(el);
            }
            
            if (options.agroup) {
                if (_this.element.find('.container-birdAlert').length > options.quantity) {
                    _this.element.find('.container-birdAlert:last').remove();
                }
            } else {
                if (_this.element.find('.container-birdAlert').length >= 2) {
                    _this.element.find('.container-birdAlert:last').remove();
                }
            }
        } else {
            if (!options.inverseInsert) {
                _this.element.prepend(el);
            } else {
                _this.element.append(el);
            }
            if (options.agroup) {
                if (_this.element.find('.container-birdAlert').length > options.quantity) {
                    _this.element.find('.container-birdAlert:first').remove();
                }
            } else {
                if (_this.element.find('.container-birdAlert').length >= 2) {
                    _this.element.find('.container-birdAlert:first').remove();
                }
            }
        }

        if (options.autoHide) {
            setTimeout(function () {
                hideElement(el);
            }, options.duration);
        }

        if (options.clickToHide) {
            el.on('click', function () {
                hideElement($(this));
            });
        } else if (options.closeButton) {
            el.find('.close-birdAlert').on('click', function () {
                hideElement(el);
            });
        }

        options.onShow();
    };

    var hideElement = function (el) {
        options.onHide();
        el.removeClass(options.showAnimation).addClass(options.hideAnimation);
        el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.remove();
        });
    };

    this.setDefaults = function () {
        options = $.extend({}, options, defaults, typeof defaults === 'object' && defaults);
        _this.element.css(positions[options.position]);
        _this.element.css({'width': options.width+'px'});

        if (options.position == 'top center' || options.position == 'bottom center') {
            _this.element.css({'margin-left': '-'+(options.width/2)+'px'});
        } else {
            _this.element.css({'margin-left': '0'});
        }
        _this.element.css({'z-index': options.zIndex });
    };

    this.set = function (param) {
        options = $.extend({}, options, param, typeof param === 'object' && param);
        _this.element.css(positions[options.position]);
        _this.element.css({'width': options.width+'px'});

        if (options.position == 'top center' || options.position == 'bottom center') {
            _this.element.css({'margin-left': '-'+(options.width/2)+'px'});
        } else {
            _this.element.css({'margin-left': '0'});
        }
        _this.element.css({'z-index': options.zIndex });
    };

    (function () {
        options = $.extend({}, defaults, options, typeof options === 'object' && options);
        _this.element = $('<div class="birdAlert" style="position: fixed;"></div>');
        $('body').append(_this.element);
        _this.element.css(positions[options.position]);
        _this.element.css({'width': options.width+'px'});

        if (options.position == 'top center' || options.position == 'bottom center') {
            _this.element.css({'margin-left': '-'+(options.width/2)+'px'});
        } else {
            _this.element.css({'margin-left': '0'});
        }
        _this.element.css({'z-index': options.zIndex });
    })();
}