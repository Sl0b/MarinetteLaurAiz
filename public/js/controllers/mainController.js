// MAIN CONTROLLER
function mainController($scope, listVilleService) {
   $scope.title = "Marinette";
	
   $scope.change = function(){
    listVilleService.getWeather($scope.ville).then(function(response){
      $scope.details = response;
    }, function(){
      console.log('error'); 
    });
   }
     
}