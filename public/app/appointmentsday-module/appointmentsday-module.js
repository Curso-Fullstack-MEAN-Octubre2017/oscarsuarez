'use strict';

angular.module('appointmentsdayModule', [])
    .component('appointmentsdayModule', {

        templateUrl: '/app/appointmentsday-module/appointmentsday-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices) {


            console.log("Componente appointments day");

            var dates = moment($routeParams.date, 'YYYYMMDD').format('YYYY-MM-DD');
            var obj = appointmentsServices.getAppointments();

            if (obj[dates]) {

                $scope.hoursList = obj[dates];
                console.log('hours');
                console.log($scope.hoursList);

            } else {

                console.error('No hay citas');
            }
        }
    });