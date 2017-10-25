'use strict';

angular.module('appointmentsServices', [])
    .factory('appointmentsServices', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams) {

        console.log('En el servicio Appointments');

        var self = {};
        self._cache = {};

        self.getAppointmentsByMonth = (date) => {

            console.log('date ' + date);

            var q = $q.defer();
            var thisMonth = moment(date).format('YYYYMM');
            var nextMonth = moment(date).add(1, 'month').format('YYYYMM');

            // si ya tenemos los datos los devolvemos
            if (self._cache[thisMonth]) {
                console.log('Uso de datos en cache');
                q.resolve(self._cache[thisMonth]);
                return q.promise;
            }

            $http.get('api/appointments/' + thisMonth + '/' + nextMonth)
                .success(function (res) {
                    console.log('Nueva peticion get');
                    self._cache[thisMonth] = res;
                    q.resolve(self._cache[thisMonth]);
                }).error(function (err) {
                q.reject(':( ' + err)
            });

            return q.promise;
        };

        self.getAppointmentById = (id) => {
            var q = $q.defer();

            $http.get('api/appointments/' + id).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(':( ' + err);
            });

            return q.promise;
        };

        self.addNewAppointment = (obj) => {
            var q = $q.defer();

            $http.post("api/appointments/", JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
                self._cache = {}; // Borrar cache para refrescar nuevos datos //
            }).error(function (err) {
                q.reject(':(' + err);
            });
            return q.promise;
        };

        self.updateAppointment = (obj) => {

            var q = $q.defer();
            $http.put("api/appointments/" + obj._id, JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
                self._cache = {}; // Borrar cache para refrescar nuevos datos //
            }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        self.deleteAppointment = (id) => {
            var q = $q.defer();
            $http.delete('api/appointments/' + id, {params: {_id: id}})
                .success(function (res) {
                    q.resolve(res);
                    self._cache = {};
                }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        return self;
    }])
;