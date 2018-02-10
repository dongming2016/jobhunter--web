import angular from 'angular';
import template from './info-label.template.html';
import controller from './info-label.controller';

export default angular.module('infoLabel', [])
    .component('comInfoLabel', {
        template,
        controller,
        controllerAs: '$ctrl',
    }).name;