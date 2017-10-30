'use strict';

angular.module('appointmentspostModule', [])
    .component('appointmentspostModule', {
        templateUrl: '/app/modules/appointments-module/appointmentspost-module/appointmentspost-module.html',
        controller: function ($scope, $filter, appointmentsServices, customersServices, petsServices) {

            //$scope.search = '';
            // $scope.customersList = [];

            var Appointment = {};
            var data;
            var appointment_id;
            $scope.$on('post-appointment', (event, data_event) => {
                data = data_event;
                console.log(moment(data).isValid());
                if (!moment(data).isValid()) {
                    // EDITAMOS UNA CITA //
                    appointment_id = data;
                    appointmentsServices.getAppointmentById(appointment_id).then(function (res) {
                        $scope.datetime = res.dateTimeStart;
                        $scope.edit = true;
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
                    $scope.datetime = moment(data, 'YYYYMMDDHHmm').toDate();
                    $scope.edit = false;
                }
            });

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            //Obtengo todos los clientes para buscar
            $scope.customersList = customersServices.query();

            //Cuando hago click en un cliente ...
            $scope.customerclick = function (id, name) {
                petsServices.getPetByOwnerId({id: id}, (res) => {
                    $scope.customersPets = res;
                    $scope.selectedCustomer = name;
                    Materialize.toast('Seleccionaste a ' + name, 2000);
                });
            };

            //Cuando selecciono a una mascota
            $scope.petclick = function (id, name) {
                Appointment.petId = id;
                $scope.selectedPet = name;
                Materialize.toast('Mascota seleccionada ' + name, 2000);
                $scope.citaValida = true;
            };


            //Si el input de busqueda esta vacio no muestra la lista de clientes
            $scope.change = function () {
                if ($('#search').val() != "") {
                    $scope.hide = true;
                } else {
                    $scope.hide = false;
                }
            };

            $scope.confirmAppointment = function () {
                if (!$scope.edit) {
                    //Creamos una nueva cita
                    Appointment.dateTimeStart = $scope.datetime;
                    Appointment.dateTimeEnd = moment($scope.datetime).add(30, 'minute');
                    Appointment.vetId = null;
                    Appointment.Status = 0;

                    appointmentsServices.addNewAppointment(Appointment).then(
                        function (res) {
                            Materialize.toast('Cita guardada correctamente', 2000);
                            $scope.$emit('Appointment-change', $scope.datetime);
                            $('#modal_post').modal('close');
                        },
                        function (error) {
                            Materialize.toast('Error al guardar la cita', 2000);
                        });
                } else {
                    appointmentsServices.updateAppointment(Appointment).then(function (res) {
                            Materialize.toast('Cita modificada correctamente', 2000);
                            $scope.$emit('Appointment-change', $scope.datetime);
                            $('#modal_post').modal('close');
                        },
                        function (error) {
                            Materialize.toast('Error al modificar la cita', 2000);
                            console.error(error);
                        });
                }
            };
            $scope.deleteAppointment = function () {
                appointmentsServices.deleteAppointment(appointment_id).then(function (res) {
                    Materialize.toast('Borrado correctamente', 2000);
                    $('#modal_post').modal('close');
                    $scope.$emit('Appointment-change', $scope.datetime);
                }, function (err) {
                    Materialize.toast('Error al borrar', 2000);
                })
            }
        }
    })
;

