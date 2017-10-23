'use strict';

angular.module('petStore', [
    'ngResource',
    'ngRoute',

    //MODULES
    'customerModule',
    'detailcustomerModule',
    'detailpetModule',
    'petModule',
    'appointmentscalendarModule',
    'appointmentsdayModule',
    'appointmentsdetailModule',

    // SERVICES
    'appointmentsServices'
]);