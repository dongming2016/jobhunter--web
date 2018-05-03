import angular from 'angular';
import template from './upload.template.html';
import controller from './upload.ctrl';

export default angular.module('uploadUtil', [])
    .component('comUploadUtil', {
        template,
        controller,
        controllerAs: '$ctrl',
        bindings: {
            acceptList: '@',
        }
    }).name;
