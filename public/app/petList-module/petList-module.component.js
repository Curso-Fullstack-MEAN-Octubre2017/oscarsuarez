'use strict';

angular.module('petListModule')
    .component('petListModule', {
        templateUrl:'/app/petList-module/petList-module.html',
        controller: function($scope, $http) {
            console.log("Incializando petList-module")
        }
    })
    .controller('PetListController',function($scope, $http, $location, $routeParams){
        console.log("PetListController");
    	$scope.petList = [];
    	 
		$scope.search = {};
		if($location.search().searchTerm) {
			$scope.search.searchTerm = $location.search().searchTerm;
		}
    	$http.get("/api/pets", {params: $scope.search}).then(function(response) {
    		$scope.petList = response.data;
    	});

    	$scope.searchPets = function() {
    		$location.search("searchTerm", $scope.search.searchTerm);
        	$http.get("/api/pets", {params: $scope.search}).then(function(response) {
        		$scope.petList = response.data;
        	});
    	};
    })
    ;

    