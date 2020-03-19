var js_sources = [
          'js/jquery-2.2.4.min.js',
          'js/jquery-ui.min.js',
          'js/bootstrap.min.js',
          'js/jquery-plugin-collection.js',
          'js/fullcalendar-2.6.0/lang/de.js',
          'js/revolution-slider/js/jquery.themepunch.tools.min.js',
          'js/revolution-slider/js/jquery.themepunch.revolution.min.js',
          'js/tsvensen-equalize.js-87c2cf1/js/equalize.js',
          // 'js/underscore-min.js',
          'js/revolution-slider/js/extensions/revolution.extension.actions.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.carousel.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.migration.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.navigation.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.parallax.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js',
          'js/revolution-slider/js/extensions/revolution.extension.video.min.js'
        ];
var css_sources = [
            'css/bootstrap.min.css', 
            'css/jquery-ui.min.css',
            'css/animate.css',
            'css/css-plugin-collections.css',
            'css/menuzord-skins/menuzord-rounded-boxed.css',
            'css/style-main.css',
            'css/custom-bootstrap-margin-padding.css',
            'css/responsive.css',
            'js/fullcalendar-3.9.0/fullcalendar.min.css',
            'js/revolution-slider/css/settings.css',
            'js/revolution-slider/css/layers.css',
            'js/revolution-slider/css/navigation.css',
            'css/colors/theme-skin-color-set-casc.css'
          ];

module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: js_sources,
        dest: 'js/unibw.js',
      },
    },
    uglify: {
      unibwjs: {
        options: {
          sourceMap: true,
        },
        files: {
          'js/unibw.min.js': js_sources
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
        sourceMap: true
      },
      target: {
        files: {
          'css/unibw.min.css': css_sources
        }
      }
    },
    // cssmin: {
    //   target: {
    //     files: [{
    //       expand: true,
    //       cwd: 'css/',
    //       src: ['unibw.css'],
    //       dest: 'css/',
    //       ext: '.min.css'
    //     }]
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
