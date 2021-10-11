var $ = jQuery;

function live_equalizer(container_selector, item_selector) {
    var news_listings = document.querySelectorAll(container_selector);
    Array.prototype.forEach.call(news_listings, function (listing) {
        var timeout = null;
        var $listing = $(listing);
        var observer;
        var observer_options = {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ["style"],
        };

        function equalizer() {
            clearTimeout(timeout); // make sure, this isn't called too often.
            timeout = setTimeout(function () {
                observer.disconnect(); // need to disconnect because equalize is changing style attributes.
                $listing.equalize({
                    children: item_selector,
                    equalize: "height",
                    reset: true,
                });
                observer.observe(listing, observer_options);
                console.debug("equalized");
            }, 200);
        }

        observer = new MutationObserver(equalizer);
        observer.observe(listing, observer_options);

        $(window).resize(function () {
            // restart on reload
            equalizer();
        });
    });
}
