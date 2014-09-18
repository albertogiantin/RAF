'use strict';

/* Controllers */

app.controller('ApplicationsCtrl', ['$scope', '$location', 'applicationsList', 'selectedApplication',
	function($scope, $location, applicationsList, selectedApplication) {
		$scope.today = new Date();

		$scope.showDetails = false;
		$scope.showApp = false;

		$scope.applicationsList = applicationsList;
		$scope.openedApps = openedApplications;
		$scope.selectedGroup = null;

		$scope.openGroup = function(group) {
			$scope.selectedGroup = group;
			$scope.showDetails = true;
		}

		$scope.showApplication = function(appToShow) {
			var map = new Map();
			map.fromArray(openedApplications, 'appId');

			if (map.containsKey(appToShow.appId)) {
				console.log("Application already opened");
				$scope.showDetails = false;
				openApp(appToShow.appId);
			} else {
				$location.path('/openApplication/' + appToShow.appId).replace();
			}
		};

		if (selectedApplication) {
			$scope.openedApps.push(selectedApplication);
			$scope.showApp = true;
			openApp(selectedApplication.appId);
		}

	}
]);


app.controller('LoginCtrl', ['$scope', '$location',
	function($scope, $location) {
		$scope.nomeUtente = '';
		$scope.pwd = '';

		$scope.login = function() {
			$location.path('/applicationsView').replace();
		}
	}
]);