'use strict';

angular.module('appointmentsServices', [])
    .factory('appointmentsServices', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams) {


        return {
            getAppointments: function () {
                return this.appointments;
            },
            setAppointments: function (appointments) {
                this.appointments = appointments;
            },
        }
    }]);