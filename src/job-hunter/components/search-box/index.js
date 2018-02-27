import angular from 'angular';
import template from './search-box.template.html';
import controller from './search-box.controller';

export default angular.module('searchbox', [])
    .component('comSearchbox', {
        template,
        controller,
        controllerAs: '$ctrl',
        bindings: {
            /**需返回一个promise，输入参数为搜索值*/
            getSearchResult: '&',
            searchDetail: '&',
        }
    }).name;