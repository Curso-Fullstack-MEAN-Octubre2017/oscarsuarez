'use strict'

angular.module('petdetailModule', [])
    .component('petdetailModule', {

        templateUrl: '/app/modules/petdetail-module/petdetail-module.html',
        controller: function ($scope, $http, $routeParams, petsServices, $location, $rootScope) {

            var id = $routeParams.id
            var action = $routeParams.action

            //FILL SELECT WITH ANIMAL SPECIES//
            $scope.selectSpecies = ['Perro', 'Gato', 'Conejo', 'Cobaya', 'Huron', 'Rata', 'Iguana', 'Otro'];

            if (action == 'edit') {
                $scope.action = true
                petsServices.get({id: id}, (res) => {
                    $scope.pet = res
                    $scope.pet.birthDate = moment(res.birthDate).format('DD-MMM-YYYY', 'es')
                    $('input[name=radio_sex][value=' + res.sex + ']').prop('checked', true)
                    console.log(res.species)
                    $('#select_species').val(res.species)
                    $('#select_species').change()
                })
                $rootScope.$emit('breadcrumb', {path: $location.path(), name: 'Detalle de mascota'})
            } else {
                $rootScope.$emit('breadcrumb', {path: $location.path(), name: 'Nueva mascota'})
            }

            $scope.delete = () => {
                petsServices.delete({id: id},
                    (res) => {
                        Materialize.toast('Borrado correctamente', 2000)
                        history.back()
                    },
                    (err) => {
                        Materialize.toast('Error al borrar', 2000)
                    })
            }

            $scope.submit = function (formPet) {

                if (action == 'edit') {

                    if (Validators.validatePet($scope.pet))
                        return Materialize.toast('Error, comprueba los datos introducidos', 2000)

                    $scope.pet.sex = $('input[name=radio_sex]:checked').val()
                    $scope.pet.species = $('#select_species').val()

                    petsServices.update({id: id}, $scope.pet, (res) => {
                            Materialize.toast('Mascota modificada correctamente', 2000)
                            history.back()
                        },
                        (err) => {
                            Materialize.toast(err.message, 2000)
                        })

                } else if (action == 'create') {

                    $scope.pet.owner = id
                    //Al ser un nuevo pet hay que asignarle la id del dueño para relacionarlo
                    $scope.pet.sex = $('input[name=radio_sex]:checked').val()
                    petsServices.save({}, $scope.pet,
                        (res) => {
                            Materialize.toast('Mascota creada correctamente', 2000)
                            history.back()
                        }, (err) => {
                            console.log(err);
                            Materialize.toast('Error, comprueba los datos', 2000)
                        })
                }
            }
        }
    })