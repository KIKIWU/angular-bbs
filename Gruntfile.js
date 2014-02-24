module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({

        version: '0.0.0',

        vendor: {
            base : [
                'vendor/jquery/jquery.js',
                'vendor/angular/angular.js'
            ],
            plugins: [
                'vendor/angular-animate/angular-animate.js',
                'vendor/angular-cookies/angular-cookies.js',
                'vendor/angular-route/angular-route.js',
                'vendor/angular-sanitize/angular-sanitize.js',
                'vendor/angular-ui-utils/modules/utils.js',
                'vendor/angular-bootstrap/ui-bootstrap.js',
                'vendor/angular-resource/angular-resource.js',
                'vendor/uploadify/jquery.uploadify.js',
                'vendor/wysihtml5/dist/wysihtml5-0.3.0.js',
                'vendor/es5-shim/es5-sham.js',
                'vendor/es5-shim/es5-shim.js',
                'vendor/json3/json3.js',
                'vendor/holder/holder.js',
                'vendor/jquery.serializeJSON/jquery.serializeJSON.js',
                'vendor/bootstrap/dist/js/bootstrap.js',
                'vendor/chosen/chosen.jquery.js',
                'vendor/angular-patch/angular-patch.js'
            ],
            modernizr: ['vendor/modernizr/modernizr.js'],
            bootstrap: ['app/sass/bootstrap/bootstrap.scss']
        },

        concat: {
            options: { separator: ';' },
            base: { src: '<%= vendor.base %>', dest: 'public/js/base_<%= version %>.js' },
            plugins: { src: '<%= vendor.plugins %>', dest: 'public/js/plugins_<%= version %>.js' },
            bbs: {
                src: [
                    'app/source/module/**/*.js',
                    'app/source/controller/**/*.js',
                    'app/source/directive/**/*.js',
                    'app/source/filter/**/*.js',
                    'app/source/server/**/*.js'
                ],
                dest: 'public/js/bbs_<%= version %>.js'
            },
            bbsCss: {
                options: { separator: '' },
                src: ['app/css/**/*.css','app/source/**/*.css'], dest: 'public/css/bbs_<%= version %>.css'
            }
        },

        uglify: {
            base: { files: { 'public/js/base_<%= version %>.min.js': ['public/js/base_<%= version %>.js'] } },
            plugins: { files: { 'public/js/plugins_<%= version %>.min.js': ['public/js/plugins_<%= version %>.js'] } },
            bbs: { files: { 'public/js/bbs_<%= version %>.min.js': ['public/js/bbs_<%= version %>.js'] } }
        },

        jade: {
            options: { pretty: true },
            page: { expand: true, cwd: 'app/jade/', src: ['**/*.jade', '!**/_*.jade'], dest: 'static/', ext: '.html' },
            tpl: { expand: true, cwd: 'app/source/', src: ['**/*.jade'], dest: 'public/tpl', ext: '.html', flatten: true }
        },

        sass: {
            bootstrap: { src: '<%= vendor.bootstrap %>', dest: 'vendor/bootstrap/css/bootstrap.css' },
            dev: { expand: true, cwd: 'app/sass/', src: ['**/*.scss', '!bootstrap/**/*.scss'], dest: 'public/css/', ext: '.css' }
        },

        watch: {
            options: { livereload: true ,atBegin:true},
            livereload: { files: ['static/**/*.html'] },
            base: { files: '<%= vendor.base %>', tasks: ['concat:base'] },
            plugins: { files: '<%= vendor.plugins %>', tasks: ['concat:plugins'] },
            bbs: { options: {livereload : 10001},files: ['app/source/**/*.js'], tasks: ['concat:bbs'] },
            page: { files: ['app/jade/**/*.jade'], tasks: ['jade:page'] },
            tpl: { options: {livereload : 10003},files: ['app/source/**/*.jade'], tasks: ['jade:tpl'] },
            bbsCss: {options: {livereload : 10002}, files: ['app/css/**/*.css','app/source/**/*.css'], tasks: ['concat:bbsCss'] },
            bootstrap: { files: ['app/sass/bootstrap/**/*.scss'], tasks: ['sass:bootstrap'] },
            styles: { files: ['app/sass/**/*.scss', '!app/sass/bootstrap/**/*.scss'], tasks: ['sass:page'] },
            images: { files: ['app/img/**/*.{gif,jpg,jpeg,png}'], tasks: ['copy:img'] }
        },

        connect: {
            dev: { options: { base: '', protocol: 'http', hostname: '*', port: 8765, open: { target: 'http://localhost:8765/static/' }, livereload: true } }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', []);

    grunt.registerTask('js-base',['concat:base','uglify:base']);
    grunt.registerTask('js-base-watch',['watch:base']);

    grunt.registerTask('js-plugins',['concat:plugins','uglify:plugins']);
    grunt.registerTask('js-plugins-watch',['watch:plugins']);

    grunt.registerTask('js-bbs',['concat:bbs','uglify:bbs']);
    grunt.registerTask('js-bbs-watch',['watch:bbs']);

    grunt.registerTask('css-bbs',['concat:bbsCss']);
    grunt.registerTask('css-bbs-watch',['watch:bbsCss']);

    grunt.registerTask('tpl',['jade:tpl']);
    grunt.registerTask('tpl-watch',['watch:tpl']);

    grunt.registerTask('build',['concat','uglify','jade:tpl']);

};