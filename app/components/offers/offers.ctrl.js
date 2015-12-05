// Define module for offers controller
angular.module('app.offers.controller', [])

// Define offers controller
.controller('OffersController', ['$scope', 'offers', function OffersController($scope, offers) {
  $scope.offers = offers;
}]);
