function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/'
		});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .service('listVilleService', listVilleService)
    /*.factory('', )*/
    //.run(run);