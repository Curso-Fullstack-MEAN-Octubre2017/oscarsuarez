'use strict';

angular.module('appointmentsdetailModule', [])
    .component('appointmentsdetailModule', {

        templateUrl: '/app/appointmentsdetail-module/appointmentsdetail-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices) {

            console.log("Componente appointments day");

            var dates = moment($routeParams.date, 'YYYYMMDD');
            appointmentsServices.getAppointmentsByMonth(dates).then(function (res) {

                res = res || {};
                $scope.hoursList = [];

                var startHour = moment(dates).set({hour: 9});
                var endHour = moment(dates).set({hour: 21});

                while (startHour < endHour) {

                    $scope.hoursList.push({
                        hour: startHour.toDate(),
                        obj: res[dates.format('YYYY-MM-DD')][moment(startHour).format('HH:mm')]
                    });
                    startHour = moment(startHour).add(0.50, 'hour');
                }

                console.log($scope.hoursList);
            });

        }
    });