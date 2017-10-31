'use strict';

angular.module('appointmentscalendarModule', [])
    .component('appointmentscalendarModule', {

        templateUrl: '/app/modules/appointmentscalendar-module/appointmentscalendar-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices, $rootScope, $location) {

            /* prueba de socketio */
            var socket = io.connect();
            socket.on('appointments:evento1', function (data) {
                console.log("Recibido el evento appointments:evento1", data);
                /* realizar operaciones relacionadas con este evento */
            });

            $rootScope.$emit("breadcrumb", {path: $location.path(), name: 'Calendario'});

            var date = moment().startOf('month');
            if ($routeParams.date) date = moment($routeParams.date, 'YYYYMM');

            $scope.month = moment(date).startOf('month').format('MMMM').toUpperCase();
            $scope.year = moment(date).startOf('month').format('YYYY');

            appointmentsServices.getAppointmentsByMonth(date).then(function (res) {
                $scope.appointments = res;
                console.log('API GET RESULT \n' + res);
                //SCOPE CON MES SIGUIENTE Y MES ANTERIOR AL ACTUAL
                date = moment(date, 'YYYYMM');
                $scope.nextmonth = moment(date).add(1, 'month').format('YYYYMM');
                $scope.lastmonth = moment(date).subtract(1, 'month').format('YYYYMM');

                /***********************
                 *  PINTAR CALENDARIO  *
                 ***********************/

                //PINTAR DIAS DE LAS SEMANA EN IDIOMA LOCAL
                $scope.weeksday = [];
                for (var i = 1; i <= 7; i++) {
                    $scope.weeksday.push(moment().isoWeekday(i).format('dddd').toUpperCase());
                }


                //PINTAR DIAS DEL MES EN EL CALENDARIO
                $scope.weeks = [];
                var day = [];
                var currDate = moment(date).startOf('month');
                var endMonth = moment(date).endOf('month');

                while (currDate < endMonth) {

                    for (var i = 1; i <= 7; i++) {

                        if (moment(currDate).isoWeekday() == i && currDate < endMonth) {

                            if ($scope.appointments[moment(currDate).format('YYYY-MM-DD')]) {
                                var appointmentsofday = {
                                    day: currDate.toDate(),
                                    appointments: Object.keys($scope.appointments[moment(currDate).format('YYYY-MM-DD')]).length
                                }

                            } else {
                                var appointmentsofday = {day: currDate.toDate(), appointments: 0}
                            }
                            day.push(appointmentsofday);
                            currDate = moment(currDate).add(1, 'days');
                        } else {
                            day.push('');
                        }
                    }
                    $scope.weeks.push(day);
                    day = [];
                }
            });
        }


    });
