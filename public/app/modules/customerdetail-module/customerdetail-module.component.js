'use strict';

angular.module('customerdetailModule', [])
    .component('customerdetailModule', {

        templateUrl: '/app/modules/customerdetail-module/customerdetail-module.html',
        controller: function ($scope, $http, $routeParams, customersServices, $rootScope, $location) {

            var id = $routeParams.id;
            var action = $routeParams.action;
            $scope.action = action;

            if (action == 'edit') {
                $scope.customer = customersServices.get({id: id});

                $rootScope.$emit("breadcrumb", {path: $location.path(), name: 'Detalles de cliente'});
            }else{
                $rootScope.$emit("breadcrumb", {path: $location.path(), name: 'Nuevo cliente'});
            }


            $scope.submit = function (formCustomer) {

                var data = $scope.customer;

                if (action == 'edit') {
                    customersServices.update({id: id}, data,
                        (res) => {
                            Materialize.toast('Guardado correctamente', 2000);
                            history.back()
                        },
                        (err) => {
                            Materialize.toast('Error al guardar los cambios', 2000);
                        });
                }
                else if (action == 'create') {
                    customersServices.save({}, data,
                        (res) => {
                            Materialize.toast('Guardado correctamente', 2000);
                            history.back()
                        },
                        (err) => {
                            Materialize.toast('Error al guardar', 2000);
                        });
                }
            }
        }
    });
