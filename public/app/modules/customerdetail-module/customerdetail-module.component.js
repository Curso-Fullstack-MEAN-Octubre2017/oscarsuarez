'use strict';

angular.module('customerdetailModule', [])
    .component('customerdetailModule', {

        templateUrl: '/app/modules/customerdetail-module/customerdetail-module.html',
        controller: function ($scope, $http, $routeParams, customersServices) {
            console.log("estoy en el componente detail customer");

            var id = $routeParams.id;
            var action = $routeParams.action;
            $scope.action = action;


            if (action == 'edit') {
                customersServices.getCustomerById(id).then(function (res) {
                    $scope.customer = res;
                });
            }

            $scope.submit = function (formCustomer) {

                var data = $scope.customer;

                if (action == 'edit') {
                    customersServices.putCustomer(data).then(function (res) {
                        Materialize.toast('Guardado correctamente',2000);
                        history.back();
                    }), function (err) {
                        Materialize.toast('Error al guardar');
                    }
                }
                else if (action == 'create') {
                    customersServices.postCustomer(data).then(function (res) {
                        Materialize.toast('Guardado correctamente',2000);
                        history.back();
                    }), function (err) {
                        Materialize.toast('Error al guardar');
                    }
                }
            }
        }
    });
