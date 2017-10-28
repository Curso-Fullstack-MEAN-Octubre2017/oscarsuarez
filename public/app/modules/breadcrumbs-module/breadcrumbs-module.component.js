'use strict';

angular.module('breadcrumbsModule', [])
    .component('breadcrumbsModule', {

        templateUrl: '/app/modules/breadcrumbs-module/breadcrumbs-module.html',
        controller: function ($scope, $http, $routeParams, $rootScope, $location) {
            console.log("Estoy modulo en breadcrumbs");
            $scope.breadlist = [];

            $rootScope.$on("newLocation", function (event, data) {
                var index = -1;

                var num = 6; //limitar numero de rutas que se muestran
                if ($scope.breadlist.length == num) $scope.breadlist = [];

                //NO Puedo comparar directamente el objeto (con includes) sin recorrerlo
                //Angular crea un hash único para cada objeto
                $scope.breadlist.forEach(function (d) {
                    if (d.path == data.path && d.name == data.name)
                        index = $scope.breadlist.indexOf(d);
                });

                if (index < 0) {
                    $scope.breadlist.push(data);
                } else {
                    $scope.breadlist.length = ++index;
                }
            });
        }
    });