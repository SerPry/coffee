'use strict';
(function() {
    var position;
    /***************************  ScrollTo     *********************/
    $('header nav ').find('a').click(function() {
        var $place = "#" + $(this).data('link');
        // console.log($place);
        $.scrollTo($place, 500);


        $("header")
            .removeClass("headhesive--unstick")

        .addClass("headhesive--stick");
        $(".navbar-collapse").removeClass("in");

    });
    /************************** Animations ********************************************/

    $('#front')
        .waypoint(function(dir) {
            if (dir === "down") {
                $(this)
                    .removeClass('rotateIn')
                    .addClass('rotateOut');
            }
        }, {
            offset: "35%"
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass("rotateOut")
                    .addClass("rotateIn");
            }
        }, {
            offset: 90
        });

    $('#back')
        .waypoint(function(dir) {
            if (dir === "down") {
                $(this)
                    .removeClass('rotateOut')
                    .addClass('rotateIn');
            }
        }, {
            offset: "35%"
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass("rotateIn")
                    .addClass("rotateOut");
            }
        }, {
            offset: 90
        });
    $('.items')
        .waypoint(function(dir) {
            if (dir === 'down') {
                $(this)
                    .removeClass('fadeOutLeft')
                    .removeClass('hideOp')
                    .removeClass("delay-01")
                    .addClass('fadeInLeft');
                $(".board-text")
                    .removeClass("fadeOut")
                    .addClass("delay-01")
                    .addClass("fadeIn");
            }
        }, {
            offset: "35%"
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass("fadeInLeft")
                    .addClass('fadeOutLeft')
                    .addClass('delay-01')
                    .addClass('hideOp');
                $(".board-text")
                    .removeClass("fadeIn")
                    .removeClass("delay-01")
                    .addClass("fadeOut");
            }
        }, {
            offset: -50
        });

    // $('.animation-zone').children('.first-part')
    //     .waypoint(function(dir) {
    //         if (dir === "down") {
    //             $(this)
    //                 .addClass('fadeOutLeft ')
    //                 .removeClass('fadeInLeft');
    //         }
    //     }, {
    //         offset: "65%"
    //     })
    //     .waypoint(function(dir) {
    //         if (dir === 'up') {
    //             $(this)
    //                 .removeClass('fadeOutLeft ')
    //                 .addClass("fadeInLeft ");
    //         }
    //     }, {
    //         offset: -50
    //     });
    // $('.animation-zone').children().last()
    //     .waypoint(function(dir) {
    //         if (dir === 'down') {
    //             $(this)
    //                 .addClass("fadeInLeft animated delay-2s")
    //                 .removeClass('fadeOutLeft');
    //         }
    //     }, {
    //         offset: '30%'
    //     })
    //     .waypoint(function(dir) {
    //         if (dir === 'up') {
    //             $(this)
    //                 .removeClass('fadeInLeft delay-2s ')
    //                 .addClass('fadeOutLeft');
    //         }
    //     }, {
    //         offset: -400
    //     });


    /*************          Flower     ********************/
    var htmlDoc = $("html");
    /**    Desctop rules      **/
    if (htmlDoc.hasClass("desktop")) {
        $('#flower')
            .waypoint(function(dir) {
                if (dir === 'down') {
                    if ($("html").hasClass("mobile")) {
                        $(this)
                            .animate({
                                "bottom": "-2px"
                            }, "slow");
                    } else {
                        $(this)
                            .animate({
                                "bottom": "-9px"
                            }, "slow")
                    }
                    $(this)
                        .removeClass("hideOp");
                }
            }, {
                offset: '70%'
            })
            .waypoint(function(dir) {
                if (dir === 'up') {
                    $(this)
                        .animate({
                            "bottom": "300px"
                        }, "slow", function() {
                            $(this).addClass("hideOp");
                        });

                }
            }, {
                offset: "-5%"
            });
    }

    /**  Tablet  **/
    if (htmlDoc.hasClass("tablet")) {
        $('#flower')
            .waypoint(function(dir) {
                if (dir === 'down') {
                    $(this)
                        .animate({
                            "bottom": "-9px"
                        }, "slow")
                        .removeClass("hideOp");
                }
            }, {
                offset: '50%'
            })
            .waypoint(function(dir) {
                if (dir === 'up') {
                    $(this)
                        .animate({
                            "bottom": "200px"
                        }, "slow", function() {
                            $(this).addClass("hideOp");
                        });

                }
            }, {
                offset: 210
            });
    };

    /** Mobile  **/
    if (htmlDoc.hasClass("mobile")) {
        $('#flower')
            .waypoint(function(dir) {
                if (dir === 'down') {
                    $(this)
                        .animate({
                            "bottom": "-2px"
                        }, "slow")
                        .removeClass("hideOp");
                }
            }, {
                offset: '50%'
            })
            .waypoint(function(dir) {
                if (dir === 'up') {
                    $(this)
                        .animate({
                            "bottom": "100px"
                        }, "slow", function() {
                            $(this).addClass("hideOp");
                        });

                }
            }, {
                offset: 210
            });

    };




    $('.flowerpot').first()
        .waypoint(function(dir) {
            if (dir === 'down') {
                $(this)
                    .addClass('fadeInLeft ')
                    .removeClass('fadeOutLeft');
            }
        }, {
            offset: '70%'
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass('fadeInLeft ')
                    .addClass('fadeOutLeft');
            }
        }, {
            offset: -100
        });
    $('.flowerpot').eq(1)
        .waypoint(function(dir) {
            if (dir === 'down') {
                $(this)
                    .addClass('fadeInRight ')
                    .removeClass('fadeOutRight');
            }
        }, {
            offset: '70%'
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass('fadeInRight ')
                    .addClass('fadeOutRight');
            }
        }, {
            offset: -50
        });
    $('.hands-all')
        .waypoint(function(dir) {
            if (dir === 'down') {
                $(this)
                    .removeClass('hideOp')
                    .addClass('fadeIn')
                    .removeClass('fadeOut');

            }
        }, {
            offset: '65%'
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass('fadeIn')
                    .addClass('fadeOut')
                    .addClass('hideOp');

            }
        }, {
            offset: 150
        });
    /*******************************   Paralax ******************************/
    $('#scene').parallax();
    $('#scene-2').parallax();
    /****************************************        Menu           *********************************************/
    $('.ft').find('li').click(function() {
        var $name = $(this).data('num');
        var elem = $(".sd");
        for (var i = 0; i < elem.find('li').length; i++) {
            elem.find("li .main-span__sd").eq(i).text($name + "-" + (i + 1));
        }

    });
    /****************    Menu      **********************/
    var $liElem = $("#ft li ul");
    $liElem.slideUp();

    var count;

    $("#ft").children("li").click(function() {
        $liElem.slideUp();
        $("#ft").children("li").removeClass("active");
        $(this).addClass("active");
        count = $(this).find("ul li");

        for (var i = 0; i < count.length; i++) {
            count.eq(i).text($(this).data("num") + ' - ' + (i + 1));
        }
        if ($(this).find("ul").css("display") === "none") {
            $(this).find("ul").slideDown();
        }

    });

    // var options = {
    //   offset: 300
    // }
    // var header = new Headhesive('.header',options);

    // $(".ft").find("li").hover(function () {
    //       $(this).animate({fontSize:"40px"},300);

    // });
    // $('.content-menu ul').find('li').mouseout(function(){
    //     $(this).animate({fontSize:'35px'},300);
    //     $('li').removeClass('active');
    // });
    /********************   Scroll + Nav   *********************************/

    function addHandler(object, event, handler, useCapture) {
        if (object.addEventListener) {
            object.addEventListener(event, handler, useCapture ? useCapture : false);
        } else if (object.attachEvent) {
            object.attachEvent('on' + event, handler);
        } else alert("Add handler is not supported");
    }
    // Добавляем обработчики
    /* Gecko */
    addHandler(window, 'DOMMouseScroll', wheel);
    /* Opera */
    addHandler(window, 'mousewheel', wheel);
    /* IE */
    addHandler(document, 'mousewheel', wheel);
    // Обработчик события
    function wheel(event) {
        var delta; // Направление скролла
        // -1 - скролл вниз
        // 1  - скролл вверх
        event = event || window.event;
        // Opera и IE работают со свойством wheelDelta
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            // В Опере значение wheelDelta такое же, но с противоположным знаком
            if (window.opera) delta = -delta;
            // В реализации Gecko получим свойство detail
        } else if (event.detail) {
            delta = -event.detail / 3;


        }
        // Запрещаем обработку события браузером по умолчанию
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
        if (delta > 0) {
            console.log("+");
            window.scrollBy(0, -10);
        } else {
            console.log("-");
            window.scrollBy(0, 10);
        }
        position = $(window).scrollTop();
        if (position > 250) {
            $("header")
                .removeClass("headhesive--unstick")

            .addClass("headhesive--stick");
        } else {
            $("header")
                .removeClass("headhesive--stick")
                .addClass("headhesive--unstick");
        }
    }
    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {

        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $("header")
                .removeClass("headhesive--unstick")
                .addClass("headhesive--stick");
        } if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("header")
                .addClass("headhesive-middle-unstick");

        } else {
            $("header")
                .removeClass("headhesive-middle-unstick")
                .removeClass("headhesive--stick")
                .addClass("headhesive--unstick");
        }
    }

})();