let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/jquery.js', 'public/js')
	.js('resources/assets/js/bootstrap.js', 'public/js')
	.js('resources/assets/js/axios.js', 'public/js')
	.js('resources/assets/js/app.js', 'public/js')
	.js('resources/assets/js/font-awesome.js', 'public/js')
	.js('resources/assets/js/swal.js', 'public/js')
	.js('resources/assets/js/vue.js', 'public/js')
	.copy('resources/assets/images', 'public/images')
	.copy('node_modules/jquery-jeditable/dist/', 'public/js/')
	.copy('node_modules/select2/dist/js/select2.full.min.js', 'public/js/select2.js')
	.copy('node_modules/select2/dist/css/select2.min.css', 'public/css/select2.css')
	.scripts([
		'node_modules/datatables.net/js/jquery.dataTables.js',
		'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js'
	], 'public/js/datatable.js')
	.styles(['node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css'], 'public/css/datatable.css')
	.sass('node_modules/balloon-css/src/balloon.scss', 'public/css')
   	.sass('resources/assets/sass/app.scss', 'public/css')
   	.copy('resources/assets/themes/tabler/dist/assets', 'public/themes/tabler/assets');