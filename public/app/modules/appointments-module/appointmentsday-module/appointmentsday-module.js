'use strict';

angular.module('appointmentsdayModule', [])
    .component('appointmentsdayModule', {

        templateUrl: '/app/modules/appointments-module/appointmentsday-module/appointmentsday-module.html',
        bindings: {dates: "="},
        controller: function ($scope, appointmentsServices, $rootScope) {

            var date = this.dates;
            console.log("fecha rootscope " + $rootScope.fecha);
            appointmentsServices.getAppointmentsByMonth(date).then(function (res) {

                res = res[date.format('YYYY-MM-DD')] || {};
                $scope.hoursList = [];

                var startHour = moment(date).set({hour: 9}).utc();
                var endHour = moment(date).set({hour: 21}).utc();

                while (startHour <= endHour) {
                    $scope.hoursList.push({
                        hour: startHour.toDate(),
                        obj: res[moment(startHour).format('HH:mm')]
                    });
                    startHour = moment(startHour).add(0.50, 'hour');
                }
            });

            $scope.godetails = (id) => {
                console.log('show details appointment ' + id);
                $scope.$emit('show-details-click', id);
                $('#modal_details').modal('open');
            };
            $scope.goedit = (id) => {
                $scope.$emit('update-appointment-click', id);
               console.log('component edit');
              //  $('#modal_edit').modal('open');
            };
            $scope.gocreate = (date) => {
              //  $scope.$emit('create-appointment-click');
                console.log('component create: ' + date);
                //$('#modal_create').modal('open');
            };

        }
    });