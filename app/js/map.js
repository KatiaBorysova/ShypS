
function initMap() {
    // The location of Uluru
    var uluru = {lat: 48.2694643, lng: 25.9324938};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var infoWindow = new google.maps.InfoWindow ({
        content: '<h6>Shypshyna</h6>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
  }