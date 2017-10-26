'use strict';

angular.module('customersServices', [])
    .factory('customersServices', function ($resource) {
        console.log('Servicio customers');

        return $resource('/api/customers/:id', {id: '@id'}, {
            update: {method: 'PUT'}
        });
    });