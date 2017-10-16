'use strict';

angular.module('petStore')
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $routeProvider
            .when("/", {template: "<center><h2>Bienvenido a la app de gestion Clínica veterinaria</h2><h3>2017</h3></center>"})
            .when("/customers", {template: "<customer-module></customer-module>"})
            .when("/:action/customers/:id?", {template: "<detailcustomer-module></detailcustomer-module>"})
          //  .when("create/customers", {template: "<detailcustomer-module></detailcustomer-module>"})
            .when("/pet/:action/:id", {template: "<detailpet-module></detailpet-module>"})
            .otherwise({template: "<h4>Error 404</h4></h2>La página no existe</h2>"});
    });