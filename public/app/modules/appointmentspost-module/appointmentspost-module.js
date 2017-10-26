'use strict';

angular.module('appointmentspostModule', [])
    .component('appointmentspostModule', {
        templateUrl: '/app/modules/appointmentspost-module/appointmentspost-module.html',
        controller: function ($scope, $http, $filter, $routeParams, $location, appointmentsServices) {

            $scope.search = '';
            $scope.customersList = [];
            $scope.resumen = {
                customerId: null,
                customerName: null,
                petName: null,
                petId: null,
                dateTime: $scope.datetime
            };
            var Appointment = {};

            if ($routeParams.id) {
                var id = $routeParams.id;
                console.log('estas en edit ' + id);
                appointmentsServices.getAppointmentById(id).then(function (res) {
                    console.log(res);
                    $scope.datetime = res.dateTimeStart;
                    $scope.citaValida = true;
                    $scope.edit = true;
                    $scope.resumen = {
                        customerId: res.petId.owner._id,
                        customerName: res.petId.owner.firstName,
                        petName: res.petId.name,
                        petId: res.petId._id,
                        dateTime: res.dateTimeStart
                    };
                    Appointment = {
                        dateTimeStart: res.dateTimeStart,
                        dateTimeEnd: res.dateTimeEnd,
                        petId: res.petId,
                        vetId: res.vetId,
                        Status: res.Status,
                        _id: res._id
                    }
                });

            } else {
                $scope.datetime = moment($routeParams.datetime, 'YYYYMMDDHHmm').toDate();
                $scope.citaValida = false;
                console.log('Estas en create ' + $routeParams.datetime);
                $scope.edit = false;
            }

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
                Materialize.toast('Seleccionaste a ' + name, 2000)
            };

            $scope.petclick = function (id, name) {
                $scope.resumen.petId = id;
                $scope.resumen.petName = name;
                Materialize.toast('Mascota seleccionada ' + name, 2000);
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
                if (!$scope.edit) {
                    Appointment = {
                        dateTimeStart: $scope.datetime,
                        dateTimeEnd: moment($scope.datetime).add(30, 'minute'),
                        petId: $scope.resumen.petId,
                        vetId: null,
                        Status: 0
                    };
                    appointmentsServices.addNewAppointment(Appointment).then(
                        function (res) {
                            Materialize.toast('Cita guardada correctamente', 2000);
                            return $location.url('/appointments/');
                        },
                        function (error) {
                            Materialize.toast('Error al guardar la cita', 2000);
                        }
                    );
                } else {
                    Appointment.petId = $scope.resumen.petId;
                    appointmentsServices.updateAppointment(Appointment).then(function (res) {
                            Materialize.toast('Cita modificada correctamente', 2000);
                            return $location.url('/appointments/');
                        },
                        function (error) {
                            Materialize.toast('Error al modificar la cita', 2000);
                            console.error(error);
                        });
                }
            };
            $scope.deleteAppointment = function () {
                appointmentsServices.deleteAppointment($routeParams.id).then(function (res) {
                    Materialize.toast('Borrado correctamente', 2000);
                    history.back();
                }, function (err) {
                    Materialize.toast('Error al borrar', 2000);
                })
            }
        }
    });

