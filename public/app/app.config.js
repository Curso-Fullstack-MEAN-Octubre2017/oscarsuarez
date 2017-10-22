'use strict';

angular.module('petStore')
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $routeProvider

        //INDEX
            .when("/", {template: "<center><h2>Bienvenido a la app de gestion Clínica veterinaria</h2><h3>2017</h3></center>"})

            //ROUTES CUSTOMERS
            .when("/customers", {template: "<customer-module></customer-module>"})
            .when("/:action/customers/:id?", {template: "<detailcustomer-module></detailcustomer-module>"})

            //ROUTES PETS
            .when("/pet/:action/:id", {template: "<detailpet-module></detailpet-module>"})

            //ROUTES APPOINTMENTS
            .when("/appointments/:date?", {template: "<appointmentscalendar-module></appointmentscalendar-module>"})
            .when("/appointmentsof/:date", {template: "<appointmentsday-module></appointmentsday-module>"})

            //ROUTE NOT FOUND
            .otherwise({template: "<h4>Error 404</h4></h2>La página no existe</h2>"});
    });