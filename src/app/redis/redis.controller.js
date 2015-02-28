(function () {
    'use strict';

    angular.module('eliteAdmin').controller('RedisCtrl', RedisCtrl);

    /* @ngInject */
    function RedisCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        vm.notesCollapsed = true;

        activate();

        ////////////////

        function activate() {
        }


    }
})();