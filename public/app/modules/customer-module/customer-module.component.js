'use strict';

angular.module('customerModule', [])
    .component('customerModule', {
        templateUrl: '/app/modules/customer-module/customer-module.html',
        controller: function ($scope, $http, $filter, customersServices) {

            $scope.search = '';
            $scope.customersList = [];

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            $scope.customersList = customersServices.query();
        }
    });

    