/**
 * Created by sbunke on 2/6/2015.
 */
(function () {
    'use strict';
    var app = angular.module('eliteAdmin', [
        // Angular modules
        'ngRoute',

        // 3rd Party Modules
        'ui.bootstrap'
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })

            .when('/web', {
                templateUrl: 'app/web/web.html',
                controller: 'WebCtrl',
                controllerAs: 'vm'
            })

            .when('/redis', {
                templateUrl: 'app/redis/redis.html',
                controller: 'RedisCtrl',
                controllerAs: 'vm'
            })

            .when('/sql', {
                templateUrl: 'app/sql/sql.html',
                controller: 'SqlCtrl',
                controllerAs: 'vm'
            })

            .when('/workers', {
                templateUrl: 'app/workers/workers.html',
                controller: 'WorkersCtrl',
                controllerAs: 'vm'
            })


        ;

        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();