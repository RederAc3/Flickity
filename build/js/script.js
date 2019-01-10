var elem = document.querySelector('.main-carousel');
var button = document.querySelector('.button');
var progressBar = document.querySelector('.progress-bar')

button = fizzyUIUtils.makeArray( button );

var flkty = new Flickity('.main-carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    imagesLoaded: false,
    hash: true,
    wrapAround: true
    
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


var templateCarousell = document.getElementById('template-carousell');

Mustache.parse(templateCarousell);

var generateCarousell = Mustache.render(templateCarousell, carousell);

var results = document.getElementsByClassName('results');

results.insertAdjacentHTML('beforeend', generateCarousell);