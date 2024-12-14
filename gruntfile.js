const { task } = require("grunt")

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            },
            production: {
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/script/main.min.js' : 'src/script/main.js'
                }
            }
        }
    }) 

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('pedro', ['watch'])
    grunt.registerTask('build', ['uglify'])
}