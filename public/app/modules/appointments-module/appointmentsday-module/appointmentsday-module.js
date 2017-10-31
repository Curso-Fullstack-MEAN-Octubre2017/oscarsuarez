'use strict';

angular.module('appointmentsdayModule', [])
    .component('appointmentsdayModule', {

        templateUrl: '/app/modules/appointments-module/appointmentsday-module/appointmentsday-module.html',
        bindings: {dates: "="},
        controller: function ($scope, appointmentsServices) {

            $scope.$on('reload-appointments', (event, data) => {
                loadAppointments(data);
            });

            this.$onInit = () => {
                loadAppointments(this.dates);
            };

            function loadAppointments(date) {
                appointmentsServices.getAppointmentsByMonth(date).then(function (res) {
                    res = res[moment(date).format('YYYY-MM-DD')] || {};
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
            }

            $scope.godetails = (id) => {
                $scope.$emit('show-details-click', id);
            };
            $scope.gopostappointment = (data) => {
                $scope.$emit('post-appointment-click', data);
            };
        }
    });