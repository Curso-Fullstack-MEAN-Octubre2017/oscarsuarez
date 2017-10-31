'use strict';

angular.module('appointmentsModule', [])
    .component('appointmentsModule', {
        templateUrl: '/app/modules/appointments-module/appointments-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices, $rootScope, $location) {

            console.log("Hello i'm de component Appointments! :) ");
            var date = moment($routeParams.date, 'YYYYMMDD');
            $rootScope.$emit("breadcrumb", {path: $location.path(), name: moment(date).format('DD MMMM YYYY')});

            $scope.dates = date;

            $scope.$on('show-details-click', (event, id) => {
                $('#modal_details').modal('open');
                $scope.$broadcast('show-details', id);
            });
            $scope.$on('post-appointment-click', (event, data) => {
                $('#modal_post').modal('open');
                $scope.$broadcast('post-appointment', data);
            });
            $scope.$on('Appointment-change', (event, data) => {
                $scope.$broadcast('reload-appointments', data);
            });
        }
    });