'use strict';

angular.module('petsServices', []).factory('petsServices', function ($resource, $q) {
    return $resource('/api/pet/:id', {id: '@id'}, {
        update: {method: 'PUT'},
        getPetByOwnerId: {
            method: 'GET',
            params: {id: '@id'},
            isArray: true,
            url: '/api/customers/:id/pets'
        }
    });
});