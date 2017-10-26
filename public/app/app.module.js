'use strict';

angular.module('petStore', [
    'ngResource',
    'ngRoute',

    //MODULES
    'customerModule',
    'customerdetailModule',
    'petModule',
    'petdetailModule',
    'appointmentscalendarModule',
    'appointmentsdayModule',
    'appointmentsdetailModule',
    'appointmentspostModule',
    'eventModule',

    // SERVICES
    'appointmentsServices',
    'petsServices',
    'customersServices'
]);