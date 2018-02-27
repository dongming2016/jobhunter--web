import angular from 'angular';
import alertTemplate from './alert.template.html';
import alertController from './alert.controller';

export default angular.module('alertBox', [])
    .component('comAlertBox', {
        template: alertTemplate,
        controller: alertController,
        bindings: {
            alertTitle: '@',
            hideBox: '&',
        },
        controllerAs: '$ctrl',
        transclude: true,
    }).name;
