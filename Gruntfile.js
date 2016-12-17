module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/css/style.css': 'sass/style.sass'
        }
      }
    },

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: './',
  				src: ['images/*.{png,jpg,gif}'],
  				dest: 'build/'
  			}]
  		}
  	},

    watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};