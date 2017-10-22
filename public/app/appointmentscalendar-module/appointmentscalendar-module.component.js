'use strict';

angular.module('appointmentscalendarModule', [])
    .component('appointmentscalendarModule', {

        templateUrl: '/app/appointmentscalendar-module/appointmentscalendar-module.html',
        controller: function ($scope, $http, $routeParams) {

            console.log("Componente appointments calendar");

            if ($routeParams.date) {

                var date = moment($routeParams.date, 'YYYYMM');
                $scope.year = moment(date).format('YYYY');
                $scope.month = moment(date).format('MMMM').toUpperCase();
                date = moment(date).format('YYYYMM');

            } else {

                date = moment().startOf('month').format('YYYYMM');
                $scope.month = moment().startOf('month').format('MMMM').toUpperCase();
                $scope.year = moment().startOf('month').format('YYYY');

            }

            var yearnextmonth = moment(date, 'YYYYMM').add(1, 'month').format('YYYYMM');


            //PETICION HTTP A LA API
            $http.get('api/appointments/' + date + '/' + yearnextmonth).then(function (res) {
                $scope.appointments = res.data;
                console.log('API GET RESULT \n' + $scope.appointments)


                //SCOPE CON MES SIGUIENTE Y MES ANTERIOR AL ACTUAL
                date = moment(date, 'YYYYMM');
                $scope.nextmonth = moment(date).add(1, 'month').format('YYYYMM');
                $scope.lastmonth = moment(date).subtract(1, 'month').format('YYYYMM');


                /************************
                 *  PINTAR CALENDARIO   *
                 ************************/

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
