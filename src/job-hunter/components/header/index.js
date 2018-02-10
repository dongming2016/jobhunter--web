import angular from 'angular';
import headerTemplate from './header.template.html';
import headerController from './header.controller';
import header from './header.css';

export default angular.module('header', [])
    .component('comHeader', {
        template: headerTemplate,
        controller: headerController,
        controllerAs: '$ctrl',
        bindings: {
            showBox: '&',
        }
    }).name;
