module.exports = function(grunt) {
	
	grunt.initConfig({
		
		 pkg: grunt.file.readJSON('package.json'),
		 
		 transport : {
			 webqq : {
				 files : {
					 '.build' : ['js/main.js','js/drag.js','js/scale.js','js/range.js']
				 }
			 }
		 },
		 
		 concat : {
			 webqq : {
				 files : {
					 'dist/main.js' : ['.build/js/main.js','.build/js/drag.js','.build/js/scale.js','.build/js/range.js']
				 }
			 }
		 },
		 uglify : {
			 webqq : {
				 files : {
					 'dist/main.min.js' : ['dist/main.js']
 				 }
			 }
		 }
		
	});
	
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

  	grunt.registerTask('default', ['transport','concat','uglify']);

	
};