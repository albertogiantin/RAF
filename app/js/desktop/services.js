'use strict';

app.factory('ApplicationService', ['$http', '$q',
	function($http, $q) {

		var ApplicationService = function(data) {
			angular.extend(this, data);
		}

		// a static method to retrieve user accounts
		ApplicationService.query = function() {
			return Mocks.applications;
		};

		ApplicationService.get = function(applicationId) {
			if (applicationId) {
				return {
					appId: applicationId,
					name: 'RAF',
					tagClass: 'tag2',
					appUrl: 'http://127.0.0.1:8000/app/index.html',
					link: '/raf'
				};
			} else {
				return null;
			}
		}

		return ApplicationService;
	}
]);