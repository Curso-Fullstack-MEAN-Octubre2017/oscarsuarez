'use strict';

angular.module('petModule', [])
    .component('petModule', {

        templateUrl: '/app/modules/pet-module/pet-module.html',
        controller: function ($scope, $http, $routeParams, petsServices) {

            var id = $routeParams.id;
            $scope.customerId = id;
            $scope.petList = [];

            petsServices.getPetByOwnerId({id: id}, (res) => {
                $scope.petList = res;
            });
        }
    });