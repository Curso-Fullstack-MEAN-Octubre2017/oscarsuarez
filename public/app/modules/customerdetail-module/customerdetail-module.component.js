'use strict';

angular.module('customerdetailModule', [])
    .component('customerdetailModule', {

        templateUrl: '/app/modules/customerdetail-module/customerdetail-module.html',
        controller: function ($scope, $http, $routeParams, customersServices) {
            console.log("estoy en el componente detail customer");

            var id = $routeParams.id;
            var action = $routeParams.action;
            $scope.action = action;

            if (action == 'edit') $scope.customer = customersServices.get({id: id});

            $scope.submit = function (formCustomer) {

                var data = $scope.customer;

                if (action == 'edit') {
                    customersServices.update({id: id}, data,
                        (res) => {Materialize.toast('Guardado correctamente', 2000);history.back()},
                        (err) => {Materialize.toast('Error al guardar los cambios', 2000);});
                }
                else if (action == 'create') {
                    customersServices.save({}, data,
                        (res) => {Materialize.toast('Guardado correctamente', 2000);history.back()},
                        (err) => {Materialize.toast('Error al guardar', 2000);});
                }
            }
        }
    });
