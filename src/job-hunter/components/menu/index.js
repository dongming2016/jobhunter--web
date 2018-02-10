import angular from 'angular';
import controller from './menu.controller';
import template from './menu.template.html';
import subTemplate from './submenu.template.html';
import subCtrl from './submenu.controller';

export default angular.module('menu', [])
    .component('comMenu', {
        template,
        controller,
        controllerAs: '$ctrl',
        bindings: {
            menusConf: '<',
        }
    }).component('comSubmenu', {
        template: subTemplate,
        controller: subCtrl,
        controllerAs: '$ctrl',
        require: {
            menuCtrl: '^comMenu'
        },
        bindings: {
            submenuConf: '<',
        }
    }).name;