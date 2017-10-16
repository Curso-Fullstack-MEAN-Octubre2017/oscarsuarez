'use strict';

angular.module('detailpetModule', [])

    .component('detailpetModule', {

            templateUrl: '/app/detailpet-module/detailpet-module.html',
            controller: function ($scope, $http, $routeParams) {
                console.log("estoy en el componente detail pet");

                var id = $routeParams.id;
                var action = $routeParams.action;
                if (action == 'edit') {
                    $scope.action = true;
                } else {
                    $scope.action = false;
                }

                console.log(action);

                if (action == 'edit') {

                    $scope.searchpetsList = [];
                    $http.get('api/pet/' + id).then(function (res) {

                        $scope.chipNumber = res.data.chipNumber;
                        $scope.name = res.data.name;
                        $scope.species = res.data.species;
                        $scope.sex = res.data.sex;
                        $scope.picUrl = res.data.picUrl;
                        $scope.owner = res.data.owner;
                        $scope.race = res.data.race;
                        $scope.birthDate = moment(res.data.birthDate).format('DD-MMM-YYYY', 'es');
                        $scope.description = res.data.description;

                        console.log($scope.searchpetsList);
                    });

                }

                $scope.delete = function () {
                    $http.delete('api/pet/' + id, {params: {_id: id}}).then(function (res) {
                        if (res.status == 200) {
                            alert('Borrado correctamente');
                            history.back();
                        } else {
                            alert('Error al borrar');
                            history.back();
                        }
                    });
                };

                $scope.submit = function (formPet) {
                    var data = {
                        chipNumber: $scope.chipNumber,
                        name: $scope.name,
                        species: $scope.species,
                        sex: $scope.sex,
                        picUrl: $scope.picUrl,
                        owner: $routeParams.id,
                        race: $scope.race,
                        birthDate: $scope.birthDate,
                        description: $scope.description
                    };

                    if (action == 'edit') {
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
                    } else if (action == 'create') {

                        $http({
                            method: 'POST',
                            url: "api/pet/",
                            data: JSON.stringify(data),
                            headers: {'Content-Type': 'application/json'}
                        }).success(function (data, status, headers, config) {
                            console.log('guardado correctamente');
                            alert('guardado correctamente');
                            history.back();
                        }).error(function (status) {
                            console.log('Error ' + status);
                            alert('Error comprueba los campos');
                        })

                    }
                }
            }

        }
    );
