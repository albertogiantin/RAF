'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'googlechart',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adeguatezzaComplessivaView', 
  	{templateUrl: 'partials/adeguatezzaComplessiva.html', 
  	controller: 'AdeguatezzaComplessivaCtrl'}
  );
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/adeguatezzaComplessivaView'});
}]);
