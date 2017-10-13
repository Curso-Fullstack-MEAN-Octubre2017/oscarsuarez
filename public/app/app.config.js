'use strict';

angular.module('petStore')
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $routeProvider
            .when("/", {template: "<h2>Bienvenido a la App Clínica veterinaria</h2>"})
            .when("/customers", {template: "<customer-module></customer-module>"})
            .when("/customers/:id/pets", {template: "<detailcustomer-module></detailcustomer-module>"})
            .when("/customers/newcustomer", {template: "<detailcustomer-module></detailcustomer-module>"})
            .otherwise({template: "<h4>Error 404</h4></h2>La página no existe</h2>"});
    });