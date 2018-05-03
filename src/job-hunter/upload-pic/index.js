import angular from 'angular';
import template from './upload-pic.template.html';
import controller from './upload-pic.ctrl';

export default angular.module('upload-pic', [])
    .component('upload', {
        template,
        controller,
        controllerAs: '$ctrl',
    }).name;