module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/jquery-2.2.4.min.js',
          'js/jquery-ui.min.js',
          'js/bootstrap.min.js',
          'js/jquery-plugin-collection.js',
          'js/revolution-slider/js/jquery.themepunch.tools.min.js',
          'js/revolution-slider/js/jquery.themepunch.revolution.min.js',
        ],
        dest: 'bundles/casc.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'bundles/casc.min.js': ['bundles/casc.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);

};
