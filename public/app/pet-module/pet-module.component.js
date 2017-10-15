'use strict';

angular.module('petModule', [])
    .component('petModule', {

        templateUrl: '/app/pet-module/pet-module.html',
        controller: function ($scope, $http, $routeParams) {
            console.log("Estoy en pet module");

            var id = $routeParams.id;

            $scope.customerId = id;

            $scope.petList = [];
            $http.get('api/customers/' + id + '/pets').then(function (res) {
                $scope.petList = res.data;
            });
        }
    })
;