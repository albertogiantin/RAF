'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('ApplicationsCtrl', ['$scope',
		function($scope) {
			$scope.today = new Date();

			$scope.showDetails = false;

			$scope.sistemiGovernoApps = [
			{name: 'Profilo Cliente', tagClass:'tag1'},
			{name: 'Profilo Gestore', tagClass:'tag2'},
			{name: 'Profilo Filiale', tagClass:'tag4'},
			{name: 'Gestione Campagna', tagClass:'tag2'},
			{name: 'Profilo Prodotto', tagClass:'tag3'},
			{name: 'DAG', tagClass:'tag2'},
			{name: 'Controllo di Gestione', tagClass:'tag1'},
			{name: 'Economato Centri di Costo', tagClass:'tag3'},
			{name: 'RAF', tagClass:'tag2'},
			{name: 'Budget Web', tagClass:'tag4'}
			];
		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);