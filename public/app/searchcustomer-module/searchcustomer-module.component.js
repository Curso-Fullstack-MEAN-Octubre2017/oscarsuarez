'use strict';

angular.module('searchcustomerModule', [])
    .component('searchcustomerModule', {
        templateUrl: '/app/searchcustomer-module/searchcustomer-module.html',
        controller: function ($scope, $http) {

            $scope.searchcustomersList = [];
            $http.get('api/customers').then(function (res) {
                $scope.searchcustomersList = res.data;
            });
        }
    });
