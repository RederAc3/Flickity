var templateCarousell = document.getElementById('template-carousell').innerHTML;

Mustache.parse(templateCarousell);
var carousellItems = '';
// var generateCarousell  = Mustache.render(templateCarousell, carousell);
var results = document.querySelector('#carousell');
console.log(results);
for(var i = 0; i< carousell.length; i++) {
    console.log(carousell);
    // carousellItems += Mustache.render(templateCarousell, carousell[i]);
    results.insertAdjacentHTML('beforeend', Mustache.render(templateCarousell, carousell[i]));
    console.log(carousellItems);
}





var elem = document.querySelector('.main-carousel');
var button = document.querySelector('.button');
var progressBar = document.querySelector('.progress-bar');

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


