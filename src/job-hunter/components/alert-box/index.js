import angular from 'angular';
import alertTemplate from './alert.template.html';
import alertController from './alert.controller';
import alert from './alert.css';

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
