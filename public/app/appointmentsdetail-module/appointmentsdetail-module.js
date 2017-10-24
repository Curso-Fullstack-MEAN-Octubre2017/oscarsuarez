'use strict';

angular.module('appointmentsdetailModule', [])
    .component('appointmentsdetailModule', {

        templateUrl: '/app/appointmentsdetail-module/appointmentsdetail-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices) {

            console.log("Componente appointments detail");

            var id = $routeParams.id;

            appointmentsServices.getAppointmentById(id).then(function (res) {
               $scope.details = res;
                console.log($scope.details);
            });

        }
    });