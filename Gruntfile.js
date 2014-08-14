module.exports = function(grunt) {
  var pathConfig = {
    app: 'app',
    dist: 'dist'
    //dist: '../../../agenda-web/src/main/webapp'
  };
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path: pathConfig,
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= path.dist %>/*'
          ]
        }]
      },
      server: '.tmp'
    },
    useminPrepare: {
      html: '<%= path.app %>/index.html',
      options: {
        dest: '<%= path.dist %>'
      }
    },
    usemin: {
      html: ['<%= path.dist %>/{,*/}*.html'],
      css: ['<%= path.dist %>/css/{,*/}*.css'],
      options: {
        dirs: ['<%= path.dist %>']
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= path.dist %>/js/{,*/}*.js',
            '<%= path.dist %>/css/{,*/}*.css',
            '<%= path.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
          ]
        }
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= path.app %>',
          dest: '<%= path.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'img/*',
            'img/**/*'
          ]
        }, {
          expand: true,
          cwd: '<%= path.app %>/bower_components/admin-lte/fonts/',
          dest: '<%= path.dist %>/fonts',
          src: ['*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= path.app %>/',
        dest: '.tmp',
        src: '**/{,*/}*.css'
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeRedundantAttributes: false,
          useShortDoctype: true,
          removeEmptyAttributes: false,
          removeOptionalTags: false
        },
        files: [{
          expand: true,
          cwd: '<%= path.app %>',
          src: ['*.html', '*/*.html', '*/partials/*.html'],
          dest: '<%= path.dist %>'
        }]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Clean task
  grunt.registerTask('cleanDist', [
    'clean:dist'
  ]);


  // Default task(s).
  grunt.registerTask('default', [
    'clean:dist',
    'useminPrepare',
    'htmlmin',
    'concat',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

};