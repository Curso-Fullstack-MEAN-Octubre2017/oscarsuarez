'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Pet Store Demo (Hello World)"
            })
            .when("/customers",{
                template: "<customer-list-module></customer-list-module>"
            })
            .when("/customers/:id",{
                template: "<customer-module></customer-module>"
            })
            .when("/pets",{
                template: "<pet-list-module></pet-list-module>"
            })
            .when("/pets/:id",{
                template: "<pet-module></pet-module>"
            })
            .otherwise({
                template: "Other"
            });
    });