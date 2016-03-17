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
						templateUrl: "Employees.html",
						controller:"employeesController"
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
