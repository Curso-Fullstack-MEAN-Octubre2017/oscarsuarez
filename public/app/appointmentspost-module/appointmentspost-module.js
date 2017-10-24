'use strict';

angular.module('appointmentspostModule', [])
    .component('appointmentspostModule', {
        templateUrl: '/app/appointmentspost-module/appointmentspost-module.html',
        controller: function ($scope, $http, $filter, $routeParams) {

            $scope.search = '';
            $scope.customersList = [];
            $scope.datetime = moment($routeParams.datetime, 'YYYYMMDDHHmm').toDate();

            $scope.resumen = {
                customerId: null,
                customerName: null,
                petName: null,
                petId: null,
                dateTime: $scope.datetime
            };

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            $http.get('api/customers').then(function (res) {
                $scope.customersList = res.data;
            });

            $scope.customerclick = function (id, name) {
                $http.get('api/customers/' + id + '/pets').then(function (res) {
                    $scope.customersPets = res.data;
                    $scope.resumen.customerId = id;
                    $scope.resumen.customerName = name;
                });
            };

            $scope.petclick = function (id, name) {
                $scope.resumen.petId = id;
                $scope.resumen.petName = name;
                console.log($scope.resumen.petName);

            };

            $scope.change = function () {
                if ($('#search').val() != "") {
                    $scope.hide = true;
                } else {
                    $scope.hide = false;
                }
            }
        }
    });

