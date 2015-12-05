// Define module for home controller
angular.module('app.home.controller', [])

// Define home controller
.controller('HomeController', ['$scope', 'cities', function HomeController($scope, cities) {
  $scope.greeting = "Welcome to an AngularJS application structure";
  $scope.countries = cities;
}]);
