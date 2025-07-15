var js_sources = [
    //"js/requirejs-undefine.js",
    'js/jquery-2.2.4.min.js', // We're using jQuery from the plone-base bundle
    //"js/jquery-ui.min.js",
    "js/bootstrap.min.js",
    //"js/jquery-plugin-collection.js",
    //"js/fullcalendar-2.6.0/lang/de.js",
    "js/tsvensen-equalize.js-87c2cf1/js/equalize.js",
    //"js/underscore-min.js",
    "js/revolution-slider/js/source/jquery.themepunch.revolution.js",
    "js/revolution-slider/js/source/jquery.themepunch.tools.min.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.actions.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.carousel.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.kenburn.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.layeranimation.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.migration.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.navigation.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.parallax.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.slideanims.js",
    "js/revolution-slider/js/extensions/source/revolution.extension.video.js",
    //"js/requirejs-redefine.js",
    "js/unibw-custom.js",
];
var css_sources = [
    "css/bootstrap.min.css",
    "css/jquery-ui.min.css",
    "css/animate.css",
    "css/css-plugin-collections.css",
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
var palladion_sources = css_sources.concat([
    "css/colors/theme-skin-color-set-palladion.css",
    "brands/palladion.css",
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
                dest: "dist/unibw.js",
            },
        },
        uglify: {
            unibwjs: {
                options: {
                    sourceMap: true,
                },
                files: {
                    "dist/unibw.min.js": js_sources,
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
                    "dist/unibw.min.css": unibw_sources,
                    "dist/dtec.min.css": dtec_sources,
                    "dist/palladion.min.css": palladion_sources,
                },
            },
        },
        copy: {
            main: {
                files: [
                    // Copy individual resources used in the theme.
                    {expand: true, cwd: "js/", src: "custom.js", dest: "dist/"},
                    {expand: true, cwd: "js/", src: "jquery-2.2.4.min.js", dest: "dist/"},
                    {expand: true, cwd: "js/", src: "underscore-min.js", dest: "dist/"},
                ],
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.registerTask("default", ["concat", "uglify", "cssmin", "copy"]);
};
