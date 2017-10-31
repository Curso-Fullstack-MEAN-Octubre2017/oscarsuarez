'use strict';

angular.module('appointmentsdetailModule', [])
    .component('appointmentsdetailModule', {

        templateUrl: '/app/modules/appointments-module/appointmentsdetail-module/appointmentsdetail-module.html',
        controller: function ($scope, appointmentsServices) {

            $scope.$on('show-details', (event, id) => {
                console.log(id, +"i'm in component details");
                appointmentsServices.getAppointmentById(id).then(function (res) {
                    $scope.details = res;
                    console.log($scope.details.Status);
                    console.log(JSON.stringify(res, null, 2));
                });
            });
        }
    });