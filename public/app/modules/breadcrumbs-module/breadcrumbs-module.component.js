'use strict';

angular.module('breadcrumbsModule', [])
    .component('breadcrumbsModule', {

        templateUrl: '/app/modules/breadcrumbs-module/breadcrumbs-module.html',
        controller: function ($scope, $http, $routeParams, $rootScope, $location) {
            console.log("Estoy modulo en breadcrumbs");
            $scope.breadlist = [];

            $rootScope.$on("breadcrumb", function (event, data) {
                var index = -1;

                //no puedo comprobar si un objeto ya existe en la lista porque angular crea un hash único
                //entonces cada objeto es diferente, entonces tengo que recorrer la lista y comprobar los parametros que me interesan

                $scope.breadlist.forEach(function (d) {
                    if (d.name == data.name)
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