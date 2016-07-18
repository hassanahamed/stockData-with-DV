var thisApp = angular.module('StockGraph');
angular.module('StockGraph')
	.config(function($routeProvider){
		console.log("Configuring routes");
		$routeProvider.when('/',{
			templateUrl: "./templates/contacts_all.html",
			controller: "basicDisplayController",
			controllerAs: "contacts"
		}).otherwise({
			redirectTo:'/'
		});
	});
