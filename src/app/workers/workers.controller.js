/**
 * Created by sbunke on 2/27/2015.
 */
(function () {
    'use strict';

    angular.module('eliteAdmin').controller('WorkersCtrl', WorkersCtrl);

    /* @ngInject */
    function WorkersCtrl() {
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