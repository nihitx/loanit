// Define module for offers service
angular.module('app.offers.service', ['ngResource'])

// Define Offers factory
.factory('Offers', ['$resource', function ($resource) {
  return $resource('temp/offers/:userId.json');
}]);
