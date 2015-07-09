/*eslint-env browser, jquery */
(function($) {
    "use strict";

    $.fn.titanium = function(action) {
        this.each(function() {
            var ti = $(this);
            var titlebar = ti.children(".ti-titlebar");
            var navbar = ti.children(".ti-navbar");

            if (action === "refresh") {
                if (titlebar.inView("any") === true && titlebar.height() > 0) {
                    titlebar.css({
                        paddingBottom: 0
                    });
                    navbar.removeClass("ti-navbar-fixed");
                } else {
                    titlebar.css({
                        paddingBottom: navbar.height()
                    });
                    navbar.addClass("ti-navbar-fixed");
                }
            } else if (action === "collapse") {
                if (navbar.hasClass(".collapsed")) {
                    navbar.slideUp();
                } else {
                    navbar.slideDown();
                }
            } else { // action == "install"
                ti.titanium("refresh");
                $(window).scroll(function() {
                    ti.titanium("refresh");
                });
            }
        });
    };

    $(function() {
        $(".ti").titanium();
    });
}(jQuery));
