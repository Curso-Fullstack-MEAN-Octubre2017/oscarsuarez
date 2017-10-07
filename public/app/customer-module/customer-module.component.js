'use strict';

angular.module('customerModule')
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http) {
            console.log("Incializando customer-module")
        }
    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams){
        console.log("CustomerController");
    	$scope.customer = {};
    	var id = $routeParams.id;
    	if(id != 'new') {
        	$http.get("/api/customers/" + id).then(function(response) {
        		$scope.customer = response.data;
        	});
    	}
    	
    	$scope.submit = function() {
    		console.log("Sumit", $scope.customer);
    		var isNew = !$scope.customer._id;
    		var saveOrUpdate = isNew? $http.post : $http.put;
    		var url = "/api/customers" + (isNew? "" : "/" + $scope.customer._id);
    		saveOrUpdate(url, $scope.customer).then(
				function(response) {
					$scope.customer = response.data;
					console.log(response);
					if(isNew) {
						$location.path("customers");
					}
				}, function(response) {
					console.log("Error", response);
				});
		}
    	
    	$scope.remove = function() {
    		if(confirm("Esta seguro que desea borrar este registro")) {
				$http.delete("/api/customers/" + $scope.customer._id).then(
					function() {
						alert("Borrado OK");
						$location.path("customers");
					}, function() {
						alert("Borrado Failed!!");
					});
				}
    	};
    	
    	$scope.cancel = function() {
    		history.back();
    	};
    })
    ;

    