'use strict';

angular.module('detailpetModule', [])
    .component('detailpetModule', {

        templateUrl: '/app/detailpet-module/detailpet-module.html',
        controller: function ($scope, $http, $routeParams) {

            var id = $routeParams.id;
            var action = $routeParams.action;

            if (action == 'edit') {
                $scope.action = true;
            } else {
                $scope.action = false;
            }

            if (action == 'edit') {

                $http.get('api/pet/' + id).then(function (res) {

                    $scope.pet = res.data;
                    /*
                    PROPIEDAD MAGICA QUE NO SE DEBERIA IMPLEMENTAR QUEDA PENDIENTE DE CORREGIR
                     */
                    $scope.pet.birthDate = moment(res.data.birthDate).format('DD-MMM-YYYY', 'es');

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

            $scope.submit = function (ormPet) {

                var data = $scope.pet;

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

    });
