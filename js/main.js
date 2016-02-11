'use strict';
(function() {
    $('header nav .row').find('a').click(function() {
        var $place = "#" + $(this).data('link');
        console.log($place);
        $.scrollTo($place, 500);
    });
    /************************** Animations ********************************************/
    $('#front')
        .waypoint(function(dir){
            if (dir === "down"){
                $(this)
                    .removeClass('rotateIn')
                    .addClass('rotateOut');
            }
        },{
            offset:"35%"
        })
        .waypoint(function(dir){
            if (dir === 'up'){
                $(this)
                    .removeClass("rotateOut")
                    .addClass("rotateIn");
            }
        },{
            offset:90
        });

        $('#back')
            .waypoint(function(dir){
                if (dir === "down"){
                    $(this)
                        .removeClass('rotateOut')
                        .addClass('rotateIn');
                }
            },{
                offset:"35%"
            })
            .waypoint(function(dir){
                if (dir === 'up'){
                    $(this)
                        .removeClass("rotateIn")
                        .addClass("rotateOut");
                }
            },{
                offset:90
            });
            $('.items')
            .waypoint(function(dir){
                if (dir === 'down'){
                    $(this)
                    .removeClass('fadeOutLeft')
                    .removeClass('hideOp')
                    .addClass('fadeInLeft');
                }
            },{
                offset:"35%"
            })
            .waypoint(function(dir){
                if (dir === 'up'){
                    $(this)
                    .removeClass("fadeInLeft")
                    .addClass('fadeOutLeft')
                    .addClass('hideOp');
                }
            },{
                offset:-50
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
    $('#flower')
        .waypoint(function(dir) {
            if (dir === 'down') {
                $(this)
                    .removeClass('fadeOutDown')
                    .addClass('fadeInDown');
            }
        }, {
            offset: '70%'
        })
        .waypoint(function(dir) {
            if (dir === 'up') {
                $(this)
                    .removeClass('fadeInDown')
                    .addClass('fadeOutDown');
            }
        }, {
            offset: -100
        });
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
            offset: -200
        });
    /*******************************   Paralax ******************************/
$('#scene').parallax();
$('#scene-2').parallax();
/****************************************        Menu           *********************************************/
//     $('.ft').find('li').hover(function(){
//     $(this).animate({fontSize:"40px"},300);
//     var $num = $(this).data('num');
//     var $corrNum=$num+"-"+$num;
//     console.log($corrNum);
//      $('.sd').find('li').eq($num-1).toggleClass('active');
// });
// $('.content-menu ul').find('li').mouseout(function(){
//     $(this).animate({fontSize:'35px'},300);
//     $('li').removeClass('active');
// });
})();
