'use strict';

angular.module('appointmentspostModule', [])
    .component('appointmentspostModule', {
        templateUrl: '/app/modules/appointments-module/appointmentspost-module/appointmentspost-module.html',
        controller: function ($scope, $filter, appointmentsServices, customersServices, petsServices,) {

            var data;
            var appointment_id;

            $scope.$on('post-appointment', (event, data_event) => {
                data = data_event;

                //HIDE SEARCH PREVIOUS RESULTS //
                $scope.search = "";
                $scope.show_customersList = false;
                $scope.show_petsList = false;

                if (!moment(data).isValid()) {

                    // EDIT AN APPONITMENT //
                    appointment_id = data;
                    appointmentsServices.getAppointmentById(appointment_id).then(function (res) {
                        $scope.datetime = res.dateTimeStart;
                        $scope.delete_button = true;
                        $scope.Appointment = res;
                        $scope.selectedCustomer = res.petId.owner;
                        $scope.selectedPet = res.petId;
                        $scope.show_resume = true;
                    });
                } else {

                    // CREATE NEW APPOINTMENT //
                    $scope.Appointment = {};
                    $scope.datetime = moment(data, 'YYYYMMDDHHmm').toDate();
                    $scope.show_resume = false;
                    $scope.delete_button = false;
                }
            });

            $scope.getData = function () {
                return $filter('filter')($scope.customersList, $scope.search)
            };

            //GET ALL Customers//
            $scope.customersList = customersServices.query();

            //CLICK ON A CUSTOMER  then...
            $scope.customerclick = function (customer) {
                petsServices.getPetByOwnerId({id: customer._id}, (res) => {
                    $scope.show_petsList = true;
                    $scope.customersPets = res;
                    $scope.selectedCustomer = customer;
                    Materialize.toast('Seleccionaste a ' + customer.firstName, 2000);
                });
            };

            //CLICK ON A PET  then...
            $scope.petclick = function (pet) {
                $scope.Appointment.petId = pet._id;
                $scope.selectedPet = pet;
                Materialize.toast('Mascota seleccionada ' + pet.name, 2000);
                $scope.show_resume = true;
            };

            //If input search is empty hide customer list
            $scope.change = function () {
                if ($('#search').val() != "") {
                    $scope.show_customersList = true;
                } else {
                    $scope.show_customersList = false;
                }
            };

            $scope.confirmAppointment = function () {
                if (!$scope.delete_button) {
                    //Creamos una nueva cita

                    $scope.Appointment.dateTimeStart = $scope.datetime;
                    $scope.Appointment.dateTimeEnd = moment($scope.datetime).add(30, 'minute');
                    $scope.Appointment.vetId = null;
                    $scope.Appointment.Status = 0;

                    appointmentsServices.addNewAppointment($scope.Appointment).then(
                        function (res) {
                            console.log(res);
                            Materialize.toast('Cita guardada correctamente', 2000);
                            $scope.$emit('Appointment-change', $scope.datetime);
                            $('#modal_post').modal('close');
                        },
                        function (error) {
                            console.error(error);
                            Materialize.toast('Error al guardar la cita', 2000);
                        });
                } else {
                    appointmentsServices.updateAppointment($scope.Appointment).then(function (res) {
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
                    console.error(err);
                    Materialize.toast('Error al borrar', 2000);
                })
            }
        }
    })
;

