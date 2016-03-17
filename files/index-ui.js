// Credit: https://scotch.io/tutorials/angular-routing-using-ui-router 

var app = angular.module("myModule", ["ui.router"])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
				.state("home", {
						url: '/home',
						templateUrl:"Home.html",
						controller:"homeController"
						})
				.state("employees", {
						url: '/employees',
						templateUrl: "Employees-ui.html",
						controller:"employeesController"
				})
				.state("employees.olist", {
						url: '/employees-olist',
						templateUrl: "Employees-olist.html",
						controller:"employeesController"
				})
				.state("employees.ulist", {
						url: '/employees-ulist',
						templateUrl: "Employees-ulist.html",
						controller:"employeesController"
				})
				.state("about", {
						url: '/about',
						views: {
							'': {templateUrl: 'About-ui.html'},
							'columnOne@about': {template: 'Look I am a column!'},
							'columnTwo@about': {
								templateUrl: 'Employees-olist.html',
								controller:  'employeesController'
							}
						}
				})
	})
	.controller("homeController", function($scope) {
			$scope.message = "Welcome Kerim";	
	})
	.controller("employeesController", function($scope, $http, $log) {
		$http({
                                method: "GET",
                                url: "http://localhost:3002/getEmployees"})
                .then(function (response) {
                                $scope.employees=response.data;
                                $log.info(response);
                }, function(reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                }
                );

	});
