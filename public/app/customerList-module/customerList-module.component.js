'use strict';

angular.module('customerListModule')
    .component('customerListModule', {
        templateUrl:'/app/customerList-module/customerList-module.html',
        controller: function($scope, $http) {
            console.log("Incializando customerList-module")
        }
    })
    .controller('CustomerListController',function($scope, $http, $location, $routeParams){
        console.log("CustomerListController");
    	$scope.customerList = [];
    	$http.get("/api/customers").then(function(response) {
    		$scope.customerList = response.data;
    	});

    })
    ;

    