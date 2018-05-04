import angular from 'angular';
import template from './showPic.template.html';
import controller from './showPic.controller';

export default angular.module('showPic', [])
    .component('showPic', {
        template,
        controller,
        controllerAs: '$ctrl',
    }).name;