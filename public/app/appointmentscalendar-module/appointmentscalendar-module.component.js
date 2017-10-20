'use strict';

angular.module('appointmentscalendarModule', [])
    .component('appointmentscalendarModule', {

        templateUrl: '/app/appointmentscalendar-module/appointmentscalendar-module.html',
        controller: function ($scope, $http, $routeParams) {

            console.log("estoy en el componente appointments calendar");

            if ($routeParams.yearmonth) {
                var yearmonth = moment($routeParams.yearmonth, 'YYYYMM');

                $scope.year = moment(yearmonth).format('YYYY');
                $scope.month = moment(yearmonth).format('MMMM');
                yearmonth = moment(yearmonth).format('YYYYMM');

            } else {
                yearmonth = moment().startOf('month').format('YYYYMM');
                $scope.month = moment().startOf('month').format('MMMM');
                $scope.year = moment().startOf('month').format('YYYY');
            }

            var yearnextmonth = moment(yearmonth, 'YYYYMM').add(1, 'month').format('YYYYMM');

            //peticion a la api
            $http.get('api/appointments/' + yearmonth + '/' + yearnextmonth).then(function (res) {
                $scope.appointments = res.data;
                console.log('API GET RESULT');
                console.log($scope.appointments)
            });

            // scope mes siguiente mes anterior

            yearmonth = moment(yearmonth, 'YYYYMM');
            $scope.nextmonth = moment(yearmonth).add(1, 'month').format('YYYYMM');
            $scope.lastmonth = moment(yearmonth).subtract(1, 'month').format('YYYYMM');

            //pintar calendario

            var currDate = moment(yearmonth).startOf('month');
            var endMonth = moment(yearmonth).endOf('month');

            $scope.weeks = [];
            var day = [];

            while (currDate < endMonth) {

                for (var i = 1; i <= 7; i++) {
                    if (moment(currDate).isoWeekday() == i && currDate < endMonth) {
                        day.push(moment(currDate).format('DD'));
                        currDate = moment(currDate).add(1, 'days');
                    } else {
                        day.push('');
                    }
                }
                $scope.weeks.push(day);
                day = [];
            }

            $scope.submit = function (formCustomer) {

                var data = $scope.customer;

                if (action == 'edit') {
                    $http({
                        method: 'PUT',
                        url: "api/customers/" + id,
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        alert('guardado correctamente');
                        history.back();

                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                } else if (action == 'create') {
                    $http({
                        method: 'POST',
                        url: "api/customers/",
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        alert('guardado correctamente');
                        history.back();
                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                }
            }
        }

    });
