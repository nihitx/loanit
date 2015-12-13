// Define module for cities service
angular.module('app.cities.service', ['ngResource'])

// Define cities factory
.factory('Cities', ['$resource', function ($resource) {
  return $resource('temp/cities/:cityId.json');
}]);
