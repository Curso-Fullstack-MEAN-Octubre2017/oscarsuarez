'use strict';

angular.module('appointmentsdayModule', [])
    .component('appointmentsdayModule', {

        templateUrl: '/app/appointmentsday-module/appointmentsday-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices) {

            console.log("Componente appointments day");

            var dates = moment($routeParams.date, 'YYYYMMDD').format('YYYY-MM-DD');
            appointmentsServices.getAppointmentsByMonth(dates).then(function (res) {


                var startHour = moment().set({hour: 9, minute: 0});
                var endHour = moment().set({hour: 21, minute: 0});

                var hoursList = [];

                while(startHour < endHour){
                    var obj = {
                        hour : startHour,
                        obj: res[moment(startHour).format('HH:mm')]
                    }
                    hoursList.push(obj);
                    moment(startHour).add(30,'minute');
                }

                if (res[dates]) {
                    $scope.hoursList = res[dates];
                } else {
                    console.error('No hay citas para hoy osdifjsdaoijfsdaojfiosdajfoiasdjfoi');
                }

            });

        }
    });