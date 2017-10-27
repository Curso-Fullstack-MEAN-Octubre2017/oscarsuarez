angular.module('loader', []);
angular.module('loader').component('loader', {
    templateUrl: '/app/events/loader/loader.html', controller: function ($scope, $http) {

        $scope.loading = false;
        var onRequestStart = () => {
            $scope.loading = true;
            Materialize.toast('Cargando...',1000);
        };
        var onRequestFinish = () => {
            $scope.loading = false;
            Materialize.toast('Cargado :D',1000);
        };
        $scope.$on('http:request', onRequestStart);
        $scope.$on('http:response', onRequestFinish);
        $scope.$on('http:requestError', onRequestFinish);
        $scope.$on('http:responseError', onRequestFinish);
    }
});
