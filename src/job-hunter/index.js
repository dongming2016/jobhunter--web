import login from './login';
import indexPaper from './indexPaper';
import angular from 'angular';
import template from './app.html';
import components from './components';
import indexCss from './index.css';
import services from './service';

export default angular.module('controllers', [
    login, components, indexPaper, services
]).component('app', {
    template
}).name;
