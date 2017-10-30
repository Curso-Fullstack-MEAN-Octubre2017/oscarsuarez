'use strict';

angular.module('customerModule', [])
    .component('customerModule', {
        templateUrl: '/app/modules/customer-module/customer-module.html',
        controller: function ($scope, $http, $filter, customersServices, $rootScope, $location) {

            $rootScope.$emit("breadcrumb", {path: $location.path(), name: 'Clientes'});

            $scope.search = '';
            $scope.customersList = [];

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            $scope.customersList = customersServices.query();


        }
    });

    