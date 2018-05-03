import login from './login';
import indexPaper from './indexPaper';
import uploadPic from './upload-pic';
import angular from 'angular';
import template from './app.html';
import components from './components';
import indexCss from './index.css';
import fontCss from '../assess/font/style.css'
import services from './service';

export default angular.module('controllers', [
    login, components, indexPaper, uploadPic, services
]).component('app', {
    template
}).name;
