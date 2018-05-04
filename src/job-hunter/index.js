import login from './login';
import indexPaper from './indexPaper';
import uploadPic from './upload-pic';
import userMgr from './user-mgr';
import angular from 'angular';
import template from './app.html';
import components from './components';
import indexCss from './index.css';
import fontCss from '../assess/font/style.css'
import services from './service';
import showPic from './showPic';

export default angular.module('controllers', [
    login, components, indexPaper, uploadPic, userMgr, services, showPic
]).component('app', {
    template
}).name;
