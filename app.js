/*function initMap() {
    var location = { lat: 38.871857, lng: -77.056267 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
    });
}*/

var geocoder = new google.maps.Geocoder();
var map;

function initialize() {
    geocoder = new google.maps.Geocoder();
    console.log(geocoder);
    var loca = new google.maps.LatLng(56.046467, 12.694512);
  
    map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: loca,
      zoom: 8
    });
  
  }

  
function codeAddress(address) {
    //var address = document.getElementById("address").value;
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
            console.log(results, status);
            
        var prop = {
            center:new google.maps.LatLng(results[0].geometry.bounds.f.f, results[0].geometry.bounds.b.b),
            zoom: 6
        };

    var map=new google.maps.Map(document.getElementById('map'),prop);

        /*var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        var request = {
          location: results[0].geometry.location,
          radius: 50000,
          name: 'ski',
          keyword: 'mountain',
          type: ['park']
        };
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);*/
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  $('#search-form').submit(function (e) {
    e.preventDefault();
    var citiesVal = $('#cityInput').val();
    console.log(citiesVal);
    codeAddress(citiesVal);
  });

google.maps.event.addDomListener(window, 'load', initialize);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}