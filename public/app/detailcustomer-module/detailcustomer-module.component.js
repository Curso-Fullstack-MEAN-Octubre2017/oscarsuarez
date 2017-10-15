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

                $scope.searchcustomersList = [];
                $http.get('api/customers/' + id).then(function (res) {

                    $scope.dni = res.data.dni;
                    $scope.firstName = res.data.firstName;
                    $scope.lastName = res.data.lastName;
                    $scope.phone = res.data.phone;
                    $scope.email = res.data.email;
                    $scope.note = res.data.note;

                    console.log($scope.searchcustomersList);
                });

            }

            $scope.submit = function (formCustomer) {
                var data = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    dni: $scope.dni,
                    phone: $scope.phone,
                    email: $scope.email,
                    note: $scope.note
                };

                if (action == 'edit') {
                    $http({
                        method: 'PUT',
                        url: "api/customers/" + id,
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        console.log('Ok')
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
                        console.log('Ok')
                        alert('guardado correctamente');
                        history.back();

                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                }
            }
        }

    });
