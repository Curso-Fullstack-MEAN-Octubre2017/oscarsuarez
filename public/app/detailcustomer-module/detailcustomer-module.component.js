'use strict';
console.log('hola estoy en detail')
angular.module('detailcustomerModule', [])
    .component('detailcustomerModule', {

        templateUrl: '/app/detailcustomer-module/detailcustomer-module.html',
        controller: function ($scope, $http, $routeParams) {
            console.log("estoy en el componente detail customer");

            var id = $routeParams.id;

            $scope.searchcustomersList = [];
            $http.get('api/customers/' + id).then(function (res) {
                $scope.searchcustomersList = res.data;

                console.log($scope.searchcustomersList);
            });

            $scope.petList = [];
            $http.get('api/pets/' + id).then(function (res) {
                $scope.petList = res.data;
                console.log($scope.petList);
            });
        /*
            $scope.put('api/pets/'+id).then(function (res) {
               $scope.petList
            });
            */
        }

    });
