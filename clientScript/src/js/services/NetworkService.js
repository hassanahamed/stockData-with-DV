angular.module('StockGraph')
    .factory('NetworkService', function($http) {
        console.log("network service");
        var factory = {}
        factory.getStockData = function(year, month, yAxis, successCallback, failureCallback) {

            $http({
                method: 'GET',
                url: "http://127.0.0.1:8000/stocks/" + year + "/" + month + "/",
            }).then(function(response) {
                console.log(response);
                successCallback(response.data);
            }, failureCallback);

        };

        return factory
    });
