'use strict';
(function() {
    var position;
    /***************************  ScrollTo     *********************/
    $('header nav ').find('a').click(function() {
        var $place = "#" + $(this).data('link');
        // console.log($place);
        $.scrollTo($place, 500);


        $(".navbar")
            .removeClass("headhesive--unstick")

        .addClass("headhesive--stick");
        $(".navbar-collapse").removeClass("in");

    });
    var $headerHeight = $("header").height();
    /************************** Animations ********************************************/

    $('#front')
        .waypoint(function(dir) {
            if (dir === "down") {
                $(this)
                    .removeClass('rotateIn')
                    .addClass('rotateOut');
            }
        }, {
            offset: "30%"
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass("rotateOut")
                    .addClass("rotateIn");
            }
        }, {
            offset: 50
        });

    $('#back')
        .waypoint(function(dir) {
            if (dir === "down") {
                $(this)
                    .removeClass('rotateOut')
                    .addClass('rotateIn');
            }
        }, {
            offset: "30%"
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass("rotateIn")
                    .addClass("rotateOut");
            }
        }, {
            offset: 50
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

    /********************   Scroll + Nav   *********************************/

    function addHandler(object, event, handler, useCapture) {
        if (object.addEventListener) {
            object.addEventListener(event, handler, useCapture ? useCapture : false);
        } else if (object.attachEvent) {
            object.attachEvent('on' + event, handler);
        } else alert("Add handler is not supported");
    }
    // Adding hendlers
    /* Gecko */
    addHandler(window, 'DOMMouseScroll', wheel);
    /* Opera */
    addHandler(window, 'mousewheel', wheel);
    /* IE */
    addHandler(document, 'mousewheel', wheel);
    // Hendler
    function wheel(event) {
        var delta; // direction of scroll
        // -1 - scrolling is down
        // 1  - scrolling is up
        event = event || window.event;
        // For opera and IE
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            // Only Opera
            if (window.opera) delta = -delta;
            // l
        } else if (event.detail) {
            delta = -event.detail / 3;


        }
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
        if (position > 120) {
            $(".navbar")
                .removeClass("headhesive--unstick")

            .addClass("headhesive--stick");
            
        } else {
            $(".navbar")
                .removeClass("headhesive--stick")
                .addClass("headhesive--unstick");
        }
    }
    window.onscroll = function() {
        myFunction()
    };


    // Floating header
    // 
    function myFunction() {
     
    //   console.log($headerHeight);
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        //    $(".pre-header").height($headerHeight);
            $(".navbar")
                .removeClass("headhesive--unstick")
                
                .addClass("headhesive--stick");
                      
        } else {
            // $(".pre-header").height(0);
            $(".navbar")              
                
                .removeClass("headhesive--stick")
                .addClass("headhesive--unstick");
        }
    }

})();