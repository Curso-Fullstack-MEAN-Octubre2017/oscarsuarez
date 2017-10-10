'use strict';

angular.module('customerModule', [])
    .component('customerModule', {
        templateUrl: '/app/customer-module/customer-module.html',
        controller: function ($scope, $http) {

            $scope.customersList = [];
            $http.get('api/customers').then(function (res) {
                $scope.customersList = res.data;
            });
        }
    });

    