'use strict';

angular.module('petdetailModule', [])
    .component('petdetailModule', {

        templateUrl: '/app/modules/petdetail-module/petdetail-module.html',
        controller: function ($scope, $http, $routeParams, petsServices) {

            var id = $routeParams.id;
            var action = $routeParams.action;

            if (action == 'edit') {
                $scope.action = true;
                petsServices.getPetById(id).then(function (res) {
                    $scope.pet = res;
                    $scope.pet.birthDate = moment(res.birthDate).format('DD-MMM-YYYY', 'es');
                });
            }

            $scope.delete = function () {
                petsServices.deletePet(id).then(
                    function (res) {
                        Materialize.toast('Borrado correctamente', 2000);
                        history.back();
                    },
                    function (err) {
                        Materialize.toast('Error al borrar', 2000);
                    });
            };

            $scope.submit = function (formPet) {

                if (action == 'edit') {
                    console.log('edit');

                    if (Validators.validatePet($scope.pet))
                        return Materialize.toast('Error, comprueba los datos introducidos', 2000);

                    petsServices.putPet($scope.pet).then(
                        function (res) {
                            Materialize.toast('Mascota modificada correctamente', 2000);
                            history.back();
                        }, function (err) {
                            Materialize.toast(err.message, 2000);
                        });

                } else if (action == 'create') {
                    console.log('create');
                    $scope.pet.owner = id;
                    //Al ser un nuevo pet hay que asignarle la id del dueño para relacionarlo
                    petsServices.postPet($scope.pet).then(
                        function (res) {
                            Materialize.toast('Mascota creada correctamente', 2000);
                            history.back();
                        }, function (err) {
                            Materialize.toast('Error, comprueba los datos', 2000);
                        })
                }
            }
        }
    });