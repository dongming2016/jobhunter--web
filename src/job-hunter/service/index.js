import angular from 'angular';
import header from './header/header.service';
import userMgr from './user-mgr/user-mgr.service';
import UploadService from './upload/upload.service';
import pictureService from './picture/picture.service';

export default angular.module('services', [])
    .service('headerService', header)
    .service('userMgrService', userMgr)
    .service('uploadService', UploadService)
    .service('pictureService', pictureService)
    .name;