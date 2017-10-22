'use strict';

angular.module('appointmentsService', [])
    .factory('appointmentsService', ['$http', '$q', '$routeParams', '$rootScope', function ($http, $q, $routeParams, $rootScope) {


        if ($routeParams.date) {
            var date = moment($routeParams.date, 'YYYYMM');
            date = moment(date).format('YYYYMM');
        } else {
            date = moment().startOf('month').format('YYYYMM');
        }
        var yearnextmonth = moment(date, 'YYYYMM').add(1, 'month').format('YYYYMM');

        var self = {};

        self.loadData = function () {

            self.cargando = true;
            var q = $q.defer();

            $http.get('api/appointments/' + date + '/' + yearnextmonth).then(function (res) {

                //promesa

                q.resolve(res.data);


            }, function error(err) {
                q.reject(':( ' + err)
            });

        };

        $rootScope.promise = self.loadData();
        $rootScope.promise.then(
            function (data) {

                self.data = data;

            },
            function (err) {
                console.error(err);
            });

        return self;


    }]);
