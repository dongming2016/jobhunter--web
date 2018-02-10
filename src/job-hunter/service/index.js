import angular from 'angular';
import header from './header/header.service';
import userMgr from './user-mgr/user-mgr.service'

export default angular.module('services', [])
    .service('headerService', header)
    .service('userMgrService', userMgr)
    .name;