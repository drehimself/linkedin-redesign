var elixir = require('laravel-elixir');

// elixir.config.publicPath = 'web';
// elixir.config.viewPath: 'resources/views';

elixir(function(mix) {

  mix.sass([
    'app.scss',
    'responsive.scss',
  ], './resources/assets/css');

  mix.styles([
    'reset.css',
    'simplegrid.css',
    'app.css',
    'responsive.css'
  ], './public/css/style.css')

  // mix.scripts([
  //   'first.js',
  //   'second.js'
  // ], './public/js/app.js');

  mix.browserSync({
    files: [
        './public/**/*'
    ],
    proxy: 'linkedin-redesign.dev'
 });
});
