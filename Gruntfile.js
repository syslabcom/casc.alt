var js_sources = [
    "js/requirejs-undefine.js",
    //'js/jquery-2.2.4.min.js', // We're using jQuery from the plone-base bundle
    "js/jquery-ui.min.js",
    "js/bootstrap.min.js",
    "js/jquery-plugin-collection.js",
    "js/menuzord-unglified.js",
    "js/fullcalendar-2.6.0/lang/de.js",
    "js/tsvensen-equalize.js-87c2cf1/js/equalize.js",
    "js/underscore-min.js",
    "js/revolution-slider/js/jquery.themepunch.revolution.min.js",
    "js/revolution-slider/js/jquery.themepunch.tools.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.actions.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.carousel.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.migration.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.navigation.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.parallax.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js",
    "js/revolution-slider/js/extensions/revolution.extension.video.min.js",
    "js/requirejs-redefine.js",
    "js/unibw-custom.js",
];
var css_sources = [
    "css/bootstrap.min.css",
    "css/jquery-ui.min.css",
    "css/animate.css",
    "css/css-plugin-collections.css",
    "css/menuzord-skins/menuzord-rounded-boxed.css",
    "css/style-main.css",
    "css/custom-bootstrap-margin-padding.css",
    "css/responsive.css",
    "js/fullcalendar-3.9.0/fullcalendar.min.css",
    "js/revolution-slider/css/settings.css",
    "js/revolution-slider/css/layers.css",
    "js/revolution-slider/css/navigation.css",
    "_site/css/screen.css",
    "css/plone.css",
];
var unibw_sources = css_sources.concat([
    "css/colors/theme-skin-color-set-casc.css",
    "brands/unibw.css",
]);
var dtec_sources = css_sources.concat([
    "css/colors/theme-skin-color-set-dtec.css",
    "brands/dtec.css",
]);

// During development, we will not include the brand files into the bundle to speed up turnaround
// Note: Including screen.css into the bundle resulted in broken styles, we didn't yet debug,
// But that needs to happen if we once want to include both files into the bundle as well.

module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ";",
            },
            dist: {
                src: js_sources,
                dest: "js/unibw.js",
            },
        },
        uglify: {
            unibwjs: {
                options: {
                    sourceMap: true,
                },
                files: {
                    "js/unibw.min.js": js_sources,
                },
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1,
                sourceMap: true,
            },
            target: {
                files: {
                    "css/unibw.min.css": unibw_sources,
                    "css/dtec.min.css": dtec_sources,
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", ["concat", "uglify", "cssmin"]);
};
