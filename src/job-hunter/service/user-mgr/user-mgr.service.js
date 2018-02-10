/**
 * 用户管理
 */
class UserMgrService {
    /**@ngInject */
    constructor($http) {
        this.$http = $http;
    }

    checkUser(userOption) {
        return this.$http({ url:'/job-hunt/v1/user-mgr/check-user', 
            method: 'POST',
            data: userOption,
        });
    }
}

export default UserMgrService;