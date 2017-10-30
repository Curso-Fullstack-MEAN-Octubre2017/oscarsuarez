'use strict';

angular.module('loginModule', [])
    .component('loginModule', {

        templateUrl: '/app/modules/login-module/login-module.html',
        controller: function ($scope, $http, $routeParams, petsServices,$rootScope,$location) {

            $rootScope.$emit("breadcrumb", {path: $location.path(), name: 'Inicio'});

            $scope.log = {};
            $scope.submit = (formlogin) => {
                console.log($scope.log.user);
                console.log($scope.log.pass);
            }
        }
    });