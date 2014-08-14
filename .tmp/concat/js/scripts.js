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

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('AdeguatezzaComplessivaCtrl', ['$scope',
		function($scope) {
			var chart1 = {};
			chart1.type = "PieChart";
			chart1.data = {
				"cols": [{
					id: "obiettivo",
					label: "Obiettivo",
					type: "string"
				}, {
					id: "valore",
					label: "Valore",
					type: "number"
				}],
				"rows": [{
					c: [{
						v: "Business"
					}, {
						v: 35
					}]
				}, {
					c: [{
						v: "Adeguatezza Patrimoniale"
					}, {
						v: 22
					}]
				}, {
					c: [{
						v: "Redditività"
					}, {
						v: 5
					}]
				}, {
					c: [{
						v: "Liquidità / Struttura finanziaria"
					}, {
						v: 12
					}]
				}, {
					c: [{
						v: "Rischiosità"
					}, {
						v: 12
					}]
				}]
			};

			chart1.options = {
				"isStacked": "true",
				"fill": 20,
				"displayExactValues": true,
				"vAxis": {
					"title": "Sales unit",
					"gridlines": {
						"count": 6
					}
				},
				"hAxis": {
					"title": "Date"
				}
			};

			chart1.formatters = {};

			$scope.chart = chart1;
		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);
'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);

'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
