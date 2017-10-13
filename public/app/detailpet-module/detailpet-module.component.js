'use strict';

angular.module('detailpetModule', [])
    .component('detailpetModule', {

        templateUrl: '/app/detailpet-module/detailpet-module.html',
        controller: function ($scope, $http, $routeParams) {
            console.log("estoy en el componente detail pet");

            var id = $routeParams.id;

            console.log("id " + id);

            if (id != null) {

                $scope.searchpetsList = [];
                $http.get('api/pet/' + id).then(function (res) {

                    $scope.chipNumber = res.data.chipNumber;
                    $scope.name = res.data.name;
                    $scope.species = res.data.species;
                    $scope.sex = res.data.sex;
                    $scope.picUrl = res.data.picUrl;
                    $scope.owner = res.data.owner;
                    $scope.race = res.data.race;
                    $scope.birthDate = res.data.birthDate;
                    $scope.description = res.data.description;

                    console.log($scope.searchpetsList);
                });

                $scope.petList = [];
                $http.get('api/pet/' + id).then(function (res) {
                    $scope.petList = res.data;
                    console.log($scope.petList);
                });

            }

            $scope.submit = function (formPet) {
                var data = {
                    chipNumber: $scope.chipNumber,
                    name: $scope.name,
                    species: $scope.species,
                    sex: $scope.sex,
                    picUrl: $scope.picUrl,
                    owner: $scope.owner,
                    race: $scope.race,
                    birthDate: $scope.birthDate,
                    description: $scope.description
                };

                if (id != null) {
                    $http({
                        method: 'PUT',
                        url: "api/pet/" + id,
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        console.log('Ok: ' + data);
                        alert('guardado correctamente');
                        history.back();

                    }).error(function (status) {
                        console.log('Error ' + status);
                        alert('Error al guardar');
                    })
                } else {
                    $http({
                        method: 'POST',
                        url: "api/pet/",
                        data: JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                        console.log('Ok')
                    }).error(function (status) {
                        console.log('Error ' + status);
                    })
                }
            }
        }

    });
