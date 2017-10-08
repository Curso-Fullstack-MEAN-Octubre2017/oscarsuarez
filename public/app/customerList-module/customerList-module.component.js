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
    	 
		$scope.search = {};
		if($location.search().searchTerm) {
			$scope.search.searchTerm = $location.search().searchTerm;
		}
    	$http.get("/api/customers", {params: $scope.search}).then(function(response) {
    		$scope.customerList = response.data;
    	});

    	$scope.searchCustomers = function() {
    		$location.search("searchTerm", $scope.search.searchTerm);
        	$http.get("/api/customers", {params: $scope.search}).then(function(response) {
        		$scope.customerList = response.data;
        	});
    	};
    })
    ;

    