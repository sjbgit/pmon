(function () {
    'use strict';

    angular.module('eliteAdmin').controller('WebCtrl', WebCtrl);

    /* @ngInject */
    function WebCtrl() {
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