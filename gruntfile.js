/*eslint-env node */
module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            build: {
                files: {
                    "build/titanium.min.js": ["js/titanium.js"]
                }
            }
        },

        less: {
            build: {
                options: {

                },
                files: {
                    "build/titanium.css": "less/titanium.less"
                }
            }
        },

        watch: {
            js: {
                files: ["js/**/*"],
                tasks: ["uglify:build"]
            },

            less: {
                files: ["less/**/*"],
                tasks: ["less:build"]
            }
        }
    });

    grunt.registerTask("default", ["uglify:build", "less:build"]);

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
