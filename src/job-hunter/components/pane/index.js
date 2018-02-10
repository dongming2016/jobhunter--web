import angular from 'angular';
import template from './pane.template.html';
import controller from './pane.controller';

export default angular.module('cm.pane', [])
    .component('comPane', {
        template,
        controller,
        controllerAs: '$ctrl',
        bindings: {
            paneData: '<',
        }
    }).name;
