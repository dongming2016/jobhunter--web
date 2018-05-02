import angular from 'angular';
import header from './header';
import alert from './alert-box';
import searchbox from './search-box';
import menu from './menu';
import pane from './pane';
import imgTab from './img-tab';
import infoLabel from './info-label';

export default angular.module('components', [header, alert, searchbox,
    menu, pane, imgTab, infoLabel]).name;
