'use strict';

angular.module('customersServices', [])
    .factory('customersServices', function ($resource) {

        return $resource('/api/customers/:id', {id: '@id'}, {
            update: {method: 'PUT'}
        });
    });