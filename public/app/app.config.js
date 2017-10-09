'use strict';

var angularRoutingApp = angular.module('petStore', ['ngRoute']);

angularRoutingApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/customers', {
            templateUrl: 'customer/module/customer-module.html',
            controller: 'lastNewsController'
        })
        .when('/news:id', {
            templateUrl: 'views/oneNews.html',
            controller: 'oneNewsController'
        });

    $locationProvider.html5Mode(true);
});


angularRoutingApp.controller('MainController', function ($scope) {

}).controller('lastNewsController', function ($scope, $http) {
    var lastNews = this;

    $http.get('/api/news/news.json').then(function (response) {
        lastNews.news = response.data;

        console.log("puto json" + lastNews.news);
    });


});

angularRoutingApp.controller('oneNewsController', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    var newsdetail = this;
    $http.get('/api/news/' + id + '/news.json').then(function (response) {
        newsdetail.oneNews = response.data
    });

});
