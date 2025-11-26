var live_equalizer;
(function ($) {
    var observer_options = {
        subtree: true,
        childList: true,
        // Listening for style attribute changes results in not being able to scroll to the very end in some cases.
        // See: https://github.com/syslabcom/scrum/issues/130
        //attributes: true,
        //attributeFilter: ["style"],
    };

    live_equalizer = function (container_selector, item_selector, equalize) {
        var containers = document.querySelectorAll(container_selector);
        equalize = equalize || "outerHeight";

        Array.prototype.forEach.call(containers, function (container) {
            var timeout = null;
            var $container = $(container);
            var observer;

            function equalizer() {
                clearTimeout(timeout); // make sure, this isn't called too often.
                timeout = setTimeout(function () {
                    observer.disconnect(); // need to disconnect because equalize is changing style attributes.
                    $container.equalize({
                        children: item_selector,
                        equalize: equalize,
                        reset: true,
                    });
                    observer.observe(container, observer_options);

                    console.debug("equalized");
                }, 200);
            }

            observer = new MutationObserver(equalizer);
            observer.observe(container, observer_options);

            $(window).resize(function () {
                equalizer();
            });
        });
    };
})(jQuery);
