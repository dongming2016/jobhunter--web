/** @ngInject */
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
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
        .state('app.uploadPic', {
            url: '/pictureUpload',
            views: {
                'header': {
                    template: '<com-nav></com-nav>',
                },
                'body': {
                    template: '<upload></upload>',
                }
            }
        })
        .state('app.formPage', {
            url: '/user-mgr',
            views: {
                'header': {
                    template: '<com-nav></com-nav>',
                },
                'body': {
                    template: '<user-mgr></user-mgr>',
                }
            }
        })
        .state('app.showPic', {
            url: '/show-pic',
            views: {
                'header': {
                    template: '<com-nav></com-nav>',
                },
                'body': {
                    template: '<show-pics></show-pics>',
                }
            }
        });
}