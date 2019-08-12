var gulp                 = require('gulp'), // Подключаем Gulp
	browserSync  		 = require('browser-sync').create(),
	autoprefixer 		 = require('gulp-autoprefixer'),
	sass         		 = require('gulp-sass'); //Подключаем Sass пакет,



	const { series } = require('gulp');  // новый синтаксис
	const { parallel } = require('gulp'); // новый синтаксис галп 4 

gulp.task('sass', function () { // Создаем таск Sass
	return gulp.src('app/sass/**/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync.init({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

// gulp.task('watch', function() {
// 	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
// 	gulp.watch('app/*.css').on('change', browserSync.reload); // Наблюдение за sass файлами в папке sass
// 	gulp.watch("app/*.html").on('change', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
// 	gulp.watch('app/*.js').on('change', browserSync.reload);   // Наблюдение за JS файлами в папке js
// });

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
	gulp.watch("app/*.html").on('change', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

exports.see = parallel('browser-sync', 'watch');