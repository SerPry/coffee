'use strict';
(function() {
    $('header nav ').find('a').click(function() {
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
                    .removeClass("delay-01")
                    .addClass('fadeInLeft');
                    $(".board-text")
                    .removeClass("fadeOut")
                    .addClass("delay-01")
                    .addClass("fadeIn");
                }
            },{
                offset:"35%"
            })
            .waypoint(function(dir){
                if (dir === 'up'){
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
    $('.ft').find('li').click(function(){
      var $name = $(this).data('num');
    var elem = $(".sd");
    for (var i = 0 ; i<elem.find('li').length;i++){
        elem.find("li").eq(i).text($name+"-"+(i+1));    
    }
    
});
// $(".ft").find("li").hover(function () {
//       $(this).animate({fontSize:"40px"},300);

// });
// $('.content-menu ul').find('li').mouseout(function(){
//     $(this).animate({fontSize:'35px'},300);
//     $('li').removeClass('active');
// });
})();
