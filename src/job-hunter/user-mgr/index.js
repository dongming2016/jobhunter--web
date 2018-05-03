import angular from 'angular';
import template from './user.template.html';
import controller from './user.controller';

export default angular.module('user-mgr', [])
    .component('userMgr', {
        template,
        controller,
        controllerAs: '$ctrl',
    }).name;