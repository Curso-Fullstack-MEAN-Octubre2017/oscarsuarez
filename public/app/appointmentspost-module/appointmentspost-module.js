'use strict';

angular.module('appointmentspostModule', [])
    .component('appointmentspostModule', {
        templateUrl: '/app/appointmentspost-module/appointmentspost-module.html',
        controller: function ($scope, $http, $filter, $routeParams, $location, appointmentsServices) {

            $scope.search = '';
            $scope.customersList = [];
            $scope.datetime = moment($routeParams.datetime, 'YYYYMMDDHHmm').toDate();
            $scope.citaValida = false;
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
                    $scope.resumen.petId = '';
                    $scope.resumen.petName = '';
                    $scope.citaValida = false;
                });
                Materialize.toast('Seleccionaste a ' + name, 4000)
            };

            $scope.petclick = function (id, name) {
                $scope.resumen.petId = id;
                $scope.resumen.petName = name;
                Materialize.toast('Mascota seleccionada ' + name, 4000);
                $scope.citaValida = true;
            };

            $scope.change = function () {
                if ($('#search').val() != "") {
                    $scope.hide = true;
                } else {
                    $scope.hide = false;
                }
            };

            $scope.confirmAppointment = function () {

                var newAppointment =
                    {
                        //************************************************************//
                        // PROBLEMA //!\\ AL ALMACENAR LAS FECHAS NO GUARDA EL GMT+2 //
                        //**********************************************************//
                        dateTimeStart: moment($scope.datetime).add(120, 'minute')._d,
                        dateTimeEnd: moment($scope.datetime).add(150, 'minute')._d,
                        petId: $scope.resumen.petId,
                        vetId: null,
                        Status: 0
                    };

                appointmentsServices.addNewAppointment(newAppointment).then(
                    function (res) {
                        Materialize.toast('Cita guardada correctamente', 4000);
                        return $location.url('/appointments/');
                    },
                    function (error) {
                        Materialize.toast('Error al guardar la cita', 4000);
                        console.error(error);
                    }
                );

            }
        }
    })
;

