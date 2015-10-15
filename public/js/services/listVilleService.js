// LISTVILLE SERVICE
function listVilleService($http){

  return {
    getWeather: function(city){
      return $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=340618b3e1a377f2c35d7f8d34eb18fc");
    }
  }

}