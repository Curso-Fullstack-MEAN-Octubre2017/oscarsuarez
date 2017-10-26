'use strict'

angular.module('petStore')
    .factory('loadingInterceptor', function ($rootScope) {
        var interceptor = {
            'request': function (config) {
                $rootScope.$broadcast("http:request", config);
                return config;
            },
            'response': function (response) {
                $rootScope.$broadcast("http:response", response);
                return response;
            },
            'requestError': function (rejection) {
                $rootScope.$broadcast("http:requestError", rejection);
                return rejection;
            },
            'responseError': function (rejection) {
                $rootScope.$broadcast("http:responseError", rejection);
                return rejection;
            }
        };
        return interceptor;
    })
    .config(function ($locationProvider,
                      $httpProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $httpProvider.interceptors.push('loadingInterceptor');
    })
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({enabled: true});
        $routeProvider
        //INDEX
            .when("/", {
                template: "<center><h2>Gestion Clínica veterinaria</h2><h3>2017</h3>" +
                "</center>" +
                "<div class='card-image center'><img class='responsive-img' src='banner.jpg'/></div>"
            })

            //ROUTES CUSTOMERS
            .when("/customers", {template: "<customer-module></customer-module>"})
            .when("/:action/customers/:id?", {template: "<customerdetail-module></customerdetail-module>"})

            //ROUTES PETS
            .when("/pet/:action/:id", {template: "<petdetail-module></petdetail-module>"})

            //ROUTES APPOINTMENTS
            .when("/appointments/:date?", {template: "<appointmentscalendar-module></appointmentscalendar-module>"})
            .when("/appointments/day/:date", {template: "<appointmentsday-module></appointmentsday-module>"})
            .when("/appointments/detail/:id", {template: "<appointmentsdetail-module></appointmentsdetail-module>"})
            .when("/appointments/add/:datetime", {template: "<appointmentspost-module></appointmentspost-module>"})
            .when("/appointments/edit/:id", {template: "<appointmentspost-module></appointmentspost-module>"})

            //ROUTE NOT FOUND
            .otherwise({template: "<h4>Error 404</h4></h2>La página no existe</h2>"});
    });