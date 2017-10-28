'use strict';

angular.module('appointmentsdayModule', [])
    .component('appointmentsdayModule', {

        templateUrl: '/app/modules/appointmentsday-module/appointmentsday-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices,$location,$rootScope) {

            var dates = moment($routeParams.date, 'YYYYMMDD');
            $rootScope.$emit("newLocation", {path: $location.path(), name: moment(dates).format('DD MMMM YYYY')});

            appointmentsServices.getAppointmentsByMonth(dates).then(function (res) {

                res = res[dates.format('YYYY-MM-DD')] || {};
                $scope.hoursList = [];

                var startHour = moment(dates).set({hour: 9}).utc();
                var endHour = moment(dates).set({hour: 21}).utc();

                while (startHour <= endHour) {

                    $scope.hoursList.push({
                        hour: startHour.toDate(),
                        obj: res[moment(startHour).format('HH:mm')]
                    });
                    startHour = moment(startHour).add(0.50, 'hour');

                }
                console.log($scope.hoursList);
            });
        }
    });