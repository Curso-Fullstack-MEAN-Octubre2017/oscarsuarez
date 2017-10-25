'use strict';

angular.module('petModule', [])
    .component('petModule', {

        templateUrl: '/app/modules/pet-module/pet-module.html',
        controller: function ($scope, $http, $routeParams, petsServices) {
            console.log("Estoy en pet module");

            var id = $routeParams.id;
            $scope.customerId = id;
            $scope.petList = [];

            petsServices.getPetsByOwnerId(id).then(function (res) {
                $scope.petList = res;
            })
        }
    })
;