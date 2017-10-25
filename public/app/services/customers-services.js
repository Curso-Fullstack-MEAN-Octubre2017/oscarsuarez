'use strict';

angular.module('customersServices', [])
    .factory('customersServices', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams) {

        console.log('Servicio customers');

        var self = {};

        self.getCustomers = () => {
            var q = $q.defer();
            $http.get('api/customers')
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(' :( ' + err);
            });
            return q.promise;
        };

        self.getCustomerById = (id) => {
            var q = $q.defer();
            $http.get('api/customers/' + id)
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        self.postCustomer = (obj) => {
            var q = $q.defer();
            $http.post("api/customers", JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(':(' + err);
            });
            return q.promise;
        };

        self.putCustomer = (obj) => {
            var q = $q.defer();
            $http.put("api/customers/" + obj._id, JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        return self;
    }])
;