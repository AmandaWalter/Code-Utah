angular.module('app').config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider.when('/', {
            templateUrl: 'app/modules/base/views/index.html',
        });

        $routeProvider.when('/events', {
            templateUrl: 'app/modules/base/views/events.html',
        });

        $routeProvider.when('/projects', {
            templateUrl: 'app/modules/base/views/projects.html',
        });

        $routeProvider.otherwise({
            templateUrl: '404-template.html',
        });

        $locationProvider.html5Mode(false);
    }
]);
