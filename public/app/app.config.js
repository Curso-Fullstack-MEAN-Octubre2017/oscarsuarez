'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Pet Store Demo (Hello World) <a ng-href='customers'>Customer List</a> | <a ng-href='customers/new'>New Customer</a>"
            })
            .when("/customers",{
                template: "<customer-list-module></customer-list-module>"
            })
            .when("/customers/:id",{
                template: "<customer-module></customer-module>"
            })
            .otherwise({
                template: "Other"
            });
    });