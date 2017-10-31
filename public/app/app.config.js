'use strict'

angular.module('petStore')
    .factory('loadingInterceptor', function ($rootScope, $q) {
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
                return $q.reject(rejection);
            },
            'responseError': function (rejection) {
                $rootScope.$broadcast("http:responseError", rejection);
                return $q.reject(rejection);
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
            .when("/", {template: "<login-module></login-module>"})
            //ROUTES CUSTOMERS
            .when("/customers", {template: "<customer-module></customer-module>"})
            .when("/:action/customers/:id?", {template: "<customerdetail-module></customerdetail-module>"})
            //ROUTES PETS
            .when("/pet/:action/:id", {template: "<petdetail-module></petdetail-module>"})
            //ROUTES APPOINTMENTS
            .when("/appointments/:date?", {template: "<appointmentscalendar-module></appointmentscalendar-module>"})
            .when("/appointments/day/:date", {template: "<appointments-module></appointments-module>"})
            .when("/appointments/detail/:id", {template: "<appointmentsdetail-module></appointmentsdetail-module>"})
            .when("/appointments/add/:datetime", {template: "<appointmentspost-module></appointmentspost-module>"})
            .when("/appointments/edit/:id", {template: "<appointmentspost-module></appointmentspost-module>"})
            //ROUTE NOT FOUND
            .otherwise({template: "<img class='img-responsive center' src='404.jpg' alt='404' /><h1>Oops !</h1><h3>La página no existe</h3> <a href='/'><div class='flex-text'>Volver a la página de inicio</div></a>"});
    });