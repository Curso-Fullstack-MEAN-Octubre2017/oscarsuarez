'use strict';

angular.module('petsServices', [])
    .factory('petsServices', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams) {

        console.log('Servicio Pets');

        var self = {};

        self.getPetsByOwnerId = (id) => {
            var q = $q.defer();
            $http.get('api/customers/' + id + '/pets')
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        self.getPetById = (id) => {
            var q = $q.defer();

            $http.get('api/pet/' + id)
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        self.deletePet = (id) => {
            var q = $q.defer();
            $http.delete('api/pet/' + id, {params: {_id: id}})
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        self.postPet = (obj) => {
            var q = $q.defer();

            $http.post("api/pet", JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(':(' + err);
            });
            return q.promise;
        };

        self.putPet = (obj) => {
            var q = $q.defer();
            $http.put("api/pet/" + obj._id, JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        return self;
    }])
;