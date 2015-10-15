// MAIN CONTROLLER
function mainController($scope, listVilleService) {
  $scope.title = "Marinette";
  $scope.villes = [
    {nom: "Biarritz", video: "https://www.youtube.com/embed/SblTNCEnhIw"},
    {nom: "Donostia", video: "https://www.youtube.com/embed/SblTNCEnhIw"},
    {nom: "Lekeitio", video: "https://www.youtube.com/embed/SblTNCEnhIw"},
    {nom: "Orio", video: "https://www.youtube.com/embed/SblTNCEnhIw"},
    {nom: "Mundaka", video: "https://www.youtube.com/embed/SblTNCEnhIw"},
    {nom: "Bidarte", video: "https://www.youtube.com/embed/SblTNCEnhIw"}
  ];
  var data = {};
  var image = document.querySelector('.image')
  var video = document.querySelector('.video')

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
    $scope.villes.forEach(function(ville){
      if (ville.nom == $scope.selectedNameVille){
        $scope.selectedVille = ville;
        getInfos(ville);
        return;
      }
    });

  }
  
  function getInfos(ville){
   listVilleService.getWeather(ville.nom).then(function(response){
      data = response.data;
      $scope.temp = Math.round(data.main.temp);
      $scope.meteo = data.weather[0].main;
      image.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      video.src =  ville.video;
      initialize();
      $scope.myValue = true;
      console.log(response);
    }, function(){
      console.log('error'); 
    });
  }

}