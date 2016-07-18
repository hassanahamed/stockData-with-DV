angular.module("StockGraph")
.directive( 'goClick', function ( $location ) {
    return function ( scope, element, attributes ) {
        var newPath;

        attributes.$observe( 'goClick', function (referencePath) {
            newPath = referencePath;
        });

        element.bind( 'click', function () {
            scope.$apply( function () {
                $location.path( newPath );
            });
        });
    };
});
