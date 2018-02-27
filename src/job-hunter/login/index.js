import loginCtrl from './login.controller';
import angular from 'angular';
import template from './login.template.html';

export default angular.module('login', [])
    .component('login', {
        template,
        controller: loginCtrl,
        controllerAs: '$ctrl',
    })
    .name;
