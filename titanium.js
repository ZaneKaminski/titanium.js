/// <reference path="typings/jquery/jquery.d.ts"/>
(function($) {
    $.fn.titanium = function(action) {
        var navbar = this;
        
        if (action == 'refresh') {
            var titlebar = navbar.prev();
            if (titlebar.inView('any') === true && titlebar.height() > 0) {
                titlebar.css({ marginBottom: 0 });
                navbar.addClass('navbar-static-top').removeClass('navbar-fixed-top');
            } else {
                titlebar.css({ marginBottom: navbar.outerHeight(true) });
                navbar.removeClass('navbar-static-top').addClass('navbar-fixed-top');
            }
        }
        else { // action == 'install'
            navbar.titanium('refresh');
            $(window).scroll(function() {
                navbar.titanium('refresh');
            });
        }
    };
 }(jQuery));