/** @ngInject */
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.when('/demo', '/demo/pictureUpload').when('', '/demo/pictureUpload');
    $urlRouterProvider.otherwise('/job-hunter/login');
    $stateProvider
        .state('app', {
            url: '/job-hunter',
            template: `<div ui-view="header"></div>
                    <div ui-view="nav"></div>
                    <div ui-view="body"></div>
                    <div ui-view="footer"></div>`,
        })
        .state('app.login', {
            url: '/login',
            views: {
                'body': {
                    template: '<login></login>',
                }
            }           
        })
        .state('app.index', {
            url:'/index',
            views: {
                'header': {
                    template: '<com-header></com-header>',
                },
                'body': {
                    template: '<index></index>',
                }
            }
            
        })
        .state('demo', {
            url: '/demo',
            template: '<com-nav></com-nav><ui-view></ui-view>',
        })
        .state('demo.uploadPic', {
            url: '/pictureUpload',
            template: '<upload></upload>',
        })
        .state('demo.formPage', {
            url: '/user-mgr',
            template: '<user-mgr></user-mgr>',
        })
        .state('demo.showPic', {
            url: '/show-pic',
            template: '<show-pic></show-pic>',
        });
}