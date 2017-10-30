'use strict';

angular.module('appointmentsModule', [])
    .component('appointmentsModule', {
        templateUrl: '/app/modules/appointments-module/appointments-module.html',
        controller: function ($scope, $http, $routeParams, appointmentsServices, $rootScope, $location) {

            console.log("Hello i'm de component Appointments! :) ");
            var date = moment($routeParams.date, 'YYYYMMDD');
            $rootScope.$emit("newLocation", {path: $location.path(), name: moment(date).format('DD MMMM YYYY')});

            $scope.dates = date;

            $scope.$on('show-details-click', (event, id) => {
                console.log('component appointments parent DETAILS: ', id);
                $scope.$broadcast('show-details', id);
            });

            $scope.$on('update-appointment-click', (event, id) => {
                console.log('component appointment parent UPDATE');
                $scope.$broadcast('update-appointment', id);
            });

            $scope.$on('create-appointment-click', (event, date) => {
                $scope.$broadcast('create-appointment', date);
            });
        }
    });