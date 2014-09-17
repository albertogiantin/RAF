'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'googlechart'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/applicationsView', {
      templateUrl: 'partials/applications.html',
      controller: 'ApplicationsCtrl',
      resolve: applicationsResolve
    })
      .when('/openApplication/:applicationId', {
        templateUrl: 'partials/applications.html',
        controller: 'ApplicationsCtrl',
        resolve: applicationsResolve
      })
      .when('/view2', {
        templateUrl: 'partials/partial2.html',
        controller: 'MyCtrl2'
      })
      .otherwise({
        redirectTo: '/applicationsView'
      });
  }
]);

var applicationsResolve = {
  applicationsList: ['ApplicationService',
    function(ApplicationService) {
      return ApplicationService.query();
    }
  ],
  selectedApplication: ['$route', 'ApplicationService',
    function($route,ApplicationService) {
      return ApplicationService.get($route.current.params.applicationId);
    }
  ]
};

var openedApplications = [];