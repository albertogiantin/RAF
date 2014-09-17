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