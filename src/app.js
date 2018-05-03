import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routerConfig from './router/router.conf';
import controllers from './job-hunter';
import menu from './menu-config/menu.conf';
import newMenu from './menu-config/new-menu.conf';
import I18nEN from './i18n/en-us/index.lang';
import I18nZH from './i18n/zh-cn/index.lang';

/**@ngInject */
function i18nConfig($translateProvider) {
    $translateProvider.translations('en_US', I18nEN);
    $translateProvider.translations('zh_CN', I18nZH);
    $translateProvider.preferredLanguage('zh_CN');
}

angular.module('jobhunter', [uiRouter, controllers, 'ngCookies', 'pascalprecht.translate'])
    .config(routerConfig)
    .config(i18nConfig)
    .constant('menuConfig', menu())
    .constant('newMenuConfig', newMenu())
    .name;
