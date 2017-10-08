'use strict';

angular.module('petModule')
    .component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($scope, $http) {
            console.log("Incializando pet-module")
        }
    })
    .controller('PetController',function($scope, $http, $location, $routeParams){
        console.log("PetController");
    	$scope.pet = {};
    	var id = $routeParams.id;
    	if(id != 'new') {
        	$http.get("/api/pets/" + id).then(function(response) {
        		$scope.pet = response.data;
        	});
    	}
    	
    	$scope.submit = function() {
    		console.log("Sumit", $scope.pet);
    		var isNew = !$scope.pet._id;
    		var saveOrUpdate = isNew? $http.post : $http.put;
    		var url = "/api/pets" + (isNew? "" : "/" + $scope.pet._id);
    		saveOrUpdate(url, $scope.pet).then(
				function(response) {
					$scope.pet = response.data;
					console.log(response);
					if(isNew) {
						$location.path("pets");
					}
				}, function(response) {
					console.log("Error", response);
				});
		}
    	
    	$scope.remove = function() {
    		if(confirm("Esta seguro que desea borrar este registro")) {
				$http.delete("/api/pets/" + $scope.pet._id).then(
					function() {
						alert("Borrado OK");
						$location.path("pets");
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

    