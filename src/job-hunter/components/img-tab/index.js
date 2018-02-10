import angular from 'angular';
import controller from './img.controller';
import tabController from './tab.controller';
import template from './img.template.html';
import tabTemplate from './tab.template.html';


export default angular.module('jobhunter-img-tab',[])
    .component('comTab', {
        controller: tabController,
        template: tabTemplate,
        transclude: true,
        controllerAs: '$ctrl',
    })
    .component('comImg', {
        template,
        controller,
        transclude: true,
        require: {
            tabCtrl: '^comTab',
        },
        controllerAs: '$ctrl',
    })    
    .name;