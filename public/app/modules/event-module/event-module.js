angular.module('eventModule', []);
angular.module('eventModule').component('eventModule', {
    templateUrl: '/app/modules/event-module/event-module.html', controller: function ($scope, $http) {
        $scope.loading = false;
        var onRequestStart = () => {
            $scope.loading = true;
        }
        var onRequestFinish = () => {
            $scope.loading = true;
        }
        $scope.$on('http:request', onRequestStart);
        $scope.$on('http:response', onRequestFinish);
        $scope.$on('http:requestError', onRequestFinish);
        $scope.$on('http:responseError', onRequestFinish);
    }
});
