// MAIN CONTROLLER
function mainController($scope, listVilleService) {
  $scope.title = "Itsaso bazterrak";
  $scope.villes = [
    {nom: "Biarritze", video: "https://www.youtube.com/embed/ru7SHhfRftU?autoplay=1"},
    {nom: "Donostia", video: "https://www.youtube.com/embed/k341rzauQpg?autoplay=1"},
    {nom: "Lekeitio", video: "https://www.youtube.com/embed/t3Ra_GJUzBg?autoplay=1"},
    {nom: "Orio", video: "https://www.youtube.com/embed/SblTNCEnhIw?autoplay=1"},
    {nom: "Mundaka", video: "https://www.youtube.com/embed/l0RTQl4dP00?autoplay=1"},
    {nom: "Bakio", video: "https://www.youtube.com/embed/7bSgKMIBSk8?autoplay=1"},
    {nom: "Zarautz", video: "https://www.youtube.com/embed/D6loP8PXAOk?autoplay=1"},
    {nom: "Bermeo", video: "https://www.youtube.com/embed/W7DCtgBgmjw?autoplay=1"},
    {nom: "Zumaia", video: "https://www.youtube.com/embed/Ob6vjOFnVfo?autoplay=1"},
    {nom: "Getaria", video: "https://www.youtube.com/embed/HDL7qxG84Wk?autoplay=1"},
    {nom: "Ondarroa", video: "https://www.youtube.com/embed/UG73XWkFx3A?autoplay=1"},
    {nom: "Hondarribia", video: "https://www.youtube.com/embed/xVt4T2VvH_g?autoplay=1"}

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
      title: 'Aurkitu duzu!'
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