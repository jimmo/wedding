
function init() {
  $('.content').html(soy.content());

  var selected = $('#home');
  $('.photo-frame, .horizontal-menu-item').on('click', function(event) {
    var target = $(event.currentTarget);
    if (target.data('target')) {
      target = $('#' + target.data('target'));
    }
    selected.css('z-index', '');
    selected = target.css('z-index', 200);
  });
}


function initMap() {
  var island = {lat: -33.863539, lng: 151.1531};
  var wharf = {lat: -33.869279, lng: 151.151874};
  var center = {
    lat: (island.lat * 2 + wharf.lat)/3,
    lng: (island.lng + wharf.lng)/2,
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });
  new google.maps.Marker({
    position: island,
    map: map,
    icon: 'photos/roses.svg',
  });
  new google.maps.Marker({
    position: wharf,
    map: map,
    icon: 'photos/ferry_icon.svg',
  });
}
