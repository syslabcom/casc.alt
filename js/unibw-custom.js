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

    live_equalizer = function (container_selector, item_selector) {
        var listings = document.querySelectorAll(container_selector);
        Array.prototype.forEach.call(listings, function (listing) {
            var timeout = null;
            var $listing = $(listing);
            var observer;

            function equalizer() {
                clearTimeout(timeout); // make sure, this isn't called too often.
                timeout = setTimeout(function () {
                    observer.disconnect(); // need to disconnect because equalize is changing style attributes.
                    $listing.equalize({
                        children: item_selector,
                        equalize: "height",
                        reset: true,
                    });
                    observer.observe($listing[0], observer_options);
                    console.debug("equalized");
                }, 200);
            }

            observer = new MutationObserver(equalizer);
            observer.observe(listing, observer_options);

            $(window).resize(function () {
                equalizer();
            });
            // Initial equalization
            equalizer();
        });
    };
})(jQuery);
