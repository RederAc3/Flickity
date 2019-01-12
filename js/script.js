

// ##########################--MUSTACHE--########################################

var templateCarousell = document.getElementById('template-carousell').innerHTML;

Mustache.parse(templateCarousell);
var carousellItems = '';
var results = document.querySelector('#carousell');
console.log(results);
for(var i = 0; i< carousell.length; i++) {
    console.log(carousell);
    results.insertAdjacentHTML('beforeend', Mustache.render(templateCarousell, carousell[i]));
    console.log(carousellItems);
}


// ###################--FLICKITY--###########################


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


// #########################--GOOGLE-MAPS--#####################################


window.initMap = function() {

  var Katowice = carousell[0].coords;
  var sydney = carousell[1].coords;
  var melbourne = carousell[2].coords;

  var map = new google.maps.Map(
      document.getElementById('map'), {

          zoom: 7, 
          center: carousell[0].coords
      });

   var markerOne = new google.maps.Marker({
      
      position: carousell[0].coords, 
      map: map
  });

  var markerTwo = new google.maps.Marker({
      
      position: carousell[1].coords, 
      map: map
  });

  var markerThere = new google.maps.Marker({
      
      position: carousell[2].coords, 
      map: map
  });

  var markerFour = new google.maps.Marker({
      
    position: carousell[3].coords, 
    map: map
});
};