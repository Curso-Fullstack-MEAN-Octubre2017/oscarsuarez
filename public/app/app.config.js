'use strict';

angular.module('petStore')
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $routeProvider
            .when("/", {
                template: "<h2>Bienvenido a la App Clínica veterinaria</h2>"
            })
            .when("/customers", {
                template: "<customer-module></customer-module>"
            })
            .otherwise({
                template: "Other"
            });
    });