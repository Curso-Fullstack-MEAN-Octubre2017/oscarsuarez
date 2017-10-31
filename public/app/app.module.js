'use strict';

angular.module('petStore', [
    'ngResource',
    'ngRoute',

    //MODULES
    'customerModule',
    'customerdetailModule',
    'petModule',
    'petdetailModule',
    'appointmentsModule',
    'appointmentscalendarModule',
    'appointmentsdayModule',
    'appointmentsdetailModule',
    'appointmentspostModule',
    'loginModule',
    'breadcrumbsModule',

    // SERVICES
    'appointmentsServices',
    'petsServices',
    'customersServices',
    'inputTemplates',

    //EVENTS
    'loader'
]);