// ##########################--MUSTACHE--########################################

var templateCarousell = document.getElementById('template-carousell').innerHTML;

Mustache.parse(templateCarousell);
var carousellItems = '';
var results = document.querySelector('#carousell');
console.log(results);
for (var i = 0; i < carousell.length; i++) {
  console.log(carousell);
  results.insertAdjacentHTML('beforeend', Mustache.render(templateCarousell, carousell[i]));
  console.log(carousellItems);
}

// ###################--FLICKITY--###########################

var elem = document.querySelector('.main-carousel');
var button = document.querySelector('.button');
var progressBar = document.querySelector('.progress-bar');
var map;

button = fizzyUIUtils.makeArray(button);

var flkty = new Flickity('.main-carousel', {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: false,
  imagesLoaded: false,
  hash: true,
  wrapAround: true

});

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

flkty.on('change', function (index) {
  map.panTo(carousell[index].coords)
  console.log(index);
});

// #########################--GOOGLE-MAPS--#####################################

window.initMap = function () {

  map = new google.maps.Map(
    document.getElementById('map'), {

      zoom: 7,
      center: carousell[0].coords
    });

  flkty.on('change', function () {
    new google.maps.Map(
      map.panTo(carousell[i])
    )
  });

  for (var i = 0; i < carousell.length; i++) {
    var marker = new google.maps.Marker({
      position: carousell[i].coords,
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (i) {
      return function () {
        flkty.select(i);
      }
    })(i));
  };



};

