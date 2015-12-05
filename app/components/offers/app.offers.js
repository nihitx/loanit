// Use this file to setup application submodule and load its dependencies
// Optinally the following files can be created and added as dependencies: 'app.offers.routes', 'app.offers.core', 'app.offers.services', 'app.offers.config'
angular.module('app.offers', ['app.offers.controller', 'app.offers.service'])

// Setup routes
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/offers', {
    templateUrl: 'app/components/offers/offers.list.tpl.html',
    controller: 'OffersController as offersCtrl',
    resolve:{
      offers: ['Offers', function (Offers) {
        return Offers.query();
      }]
    }
  });
}]);
