import angular from 'angular';
import headerTemplate from './header.template.html';
import headerController from './header.controller';

export default angular.module('header', [])
    .component('comHeader', {
        template: headerTemplate,
        controller: headerController,
        controllerAs: '$ctrl',
        bindings: {
            showBox: '&',
        }
    }).name;
