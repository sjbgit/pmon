/**
 * Created by sbunke on 2/27/2015.
 */
/**
 * Created by sbunke on 2/6/2015.
 */
(function () {
    'use strict';

    angular.module('eliteAdmin').controller('ShellCtrl', ShellCtrl);

    ShellCtrl.$inject = ['$rootScope'];

    function ShellCtrl($rootScope) {
        /* jshint validthis:true */
        var vm = this;

        vm.addAlert = addAlert;
        vm.closeAlert = closeAlert;

        vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        vm.showSpinner = false;
        vm.spinnerMessage = 'Retrieving data...';

        vm.spinnerOptions = {
            radius: 40,
            lines: 8,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#428bca'
        };

        activate();

        function activate() { }


        function addAlert() {
            vm.alerts.push({msg: 'Another alert!'});
        }

        function closeAlert(index) {
            console.log('close alert: ' + index);
            vm.alerts.splice(index, 1);
        }

        $rootScope.$on('spinner.toggle', function (event, args) {
            vm.showSpinner = args.show;
            if (args.message) {
                vm.spinnerMessage = args.message;
            }
        });
    }
})();
