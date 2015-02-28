(function () {
    'use strict';

    angular.module('eliteAdmin').controller('SqlCtrl', SqlCtrl);

    /* @ngInject */
    function SqlCtrl() {
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