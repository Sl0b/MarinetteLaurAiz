// MAIN CONTROLLER
function mainController($scope, listVilleService) {
  $scope.title = "Marinette";
  var data = {};
  var image = document.querySelector('.image')

  function initialize() {
    var mapProp = {
      center:new google.maps.LatLng(data.coord.lat,data.coord.lon),
      zoom:8,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var myMap = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position: {lat: data.coord.lat, lng: data.coord.lon},
      map: myMap,
      title: 'Hello World!'
    });
  }

  $scope.change = function(){
    listVilleService.getWeather($scope.ville).then(function(response){
      data = response.data;
      $scope.temp = Math.round(data.main.temp);
      $scope.meteo = data.weather[0].main;
      image.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      initialize();
      $scope.myValue = true;
      console.log(response);
    }, function(){
      console.log('error'); 
    });
  }

}