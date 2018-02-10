import angular from 'angular';
import indexTemplate from './index.template.html';
import indexController from './index.controller';
import index from './index.css';

export default angular.module('index', [])
    .component('index', {
        template: indexTemplate,
        controller: indexController,
        controllerAs: '$ctrl',
    }).name;