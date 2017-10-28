'use strict';

angular.module('appointmentsdetailModule', [])
    .component('appointmentsdetailModule', {

        templateUrl: '/app/modules/appointmentsdetail-module/appointmentsdetail-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices,$rootScope, $location) {
            var id = $routeParams.id;
            appointmentsServices.getAppointmentById(id).then(function (res) {
               $scope.details = res;
            });

            $rootScope.$emit("newLocation", {path: $location.path(), name: 'Detalles de la cita'});

        }
    });