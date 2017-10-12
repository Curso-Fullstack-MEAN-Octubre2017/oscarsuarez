'use strict';

angular.module('customerModule', [])
    .component('customerModule', {
        templateUrl: '/app/customer-module/customer-module.html',
        controller: function ($scope, $http, $filter) {

            $scope.search = '';
            $scope.customersList = [];

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            $http.get('api/customers').then(function (res) {
                $scope.customersList = res.data;
            });
        }
    });

    