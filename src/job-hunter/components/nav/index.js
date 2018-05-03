import angular from 'angular';
import template from './nav.template.html';
import controller from './nav.controller';

export default angular.module('cm.nav', [])
    .component('comNav', {
        template,
        controller,
        controllerAs: '$ctrl',
    }).name;
