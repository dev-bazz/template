const gulp = require("gulp"),
	sass = require("gulp-sass")(require("sass")),
	browserSync = require("browser-sync").create();

// Compile scss to css

function style() {
	// 1. Where is my scss file
	return (
		gulp
			.src("./styles/styles.scss")
			// 2. Pass that file through sass compiler
			.pipe(sass())
			// 3. Where do I save the compiled css?
			.pipe(gulp.dest("./"))
			// 4. Stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
	gulp.watch("./styles/**/*.scss", style);
	gulp.watch("./*.html").on("change", browserSync.reload);
	gulp.watch("./scripts/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
