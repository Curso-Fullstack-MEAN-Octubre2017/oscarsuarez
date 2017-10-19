'use strict';

angular.module('appointmentscalendarModule', [])
    .component('appointmentscalendarModule', {

        templateUrl: '/app/appointmentscalendar-module/appointmentscalendar-module.html',
        controller: function ($scope, $http, $routeParams) {

            console.log("estoy en el componente appointments calendar");

            var yearmonth = $routeParams.yearmonth;
            $scope.yearmonth = yearmonth;

            if (yearmonth) {

                var date = moment(yearmonth, 'YYYYMM');

                var dateTo = moment(date).add(1, 'month').format('YYYYMM');

                $http.get('api/appointments/' + yearmonth + '/' + dateTo).then(function (res) {
                    $scope.customer = res.data;
                });
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

    })
;
