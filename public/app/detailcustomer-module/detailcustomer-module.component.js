'use strict';

angular.module('detailcustomerModule', [])
    .component('detailcustomerModule', {

        templateUrl: '/app/detailcustomer-module/detailcustomer-module.html',
        controller: function ($scope, $http, $routeParams) {
            console.log("estoy en el componente detail customer");

            var id = $routeParams.id;
            var action = $routeParams.action;
            $scope.action = action;


            if (action == 'edit') {

                $http.get('api/customers/' + id).then(function (res) {
                    $scope.customer = res.data;
                });

            }

            $scope.submit = function (formCustomer) {

                var data = $scope.customer;

                if (action == 'edit') {
                    $http({
                        method: 'PUT',
                        url: "api/customers/" + id,
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        alert('guardado correctamente');
                        history.back();

                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                } else if (action == 'create') {
                    $http({
                        method: 'POST',
                        url: "api/customers/",
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        alert('guardado correctamente');
                        history.back();
                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                }
            }
        }

    })
;
