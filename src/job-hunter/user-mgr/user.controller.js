import angular from 'angular';

class userMgr {
    constructor(userMgrService) {
        this.user = {};
        this.error = {};
        this.isBoxShow = false;
        this.userMgrService = userMgrService;
    }

    check() {
        this.error = {};
        this.isError = false;
        if (!this.user.name) {
            this.error.name = '请输入用户名';
            this.isError = true;
        }

        if (!this.user.password) {
            this.error.pwd = '请输入密码';
            this.isError = true;
        }

        if (!this.user.repassword) {
            this.error.repwd = '请再次输入密码';
            this.isError = true;
        }

        if (this.user.password && this.user.repassword && this.user.password !== this.user.repassword) {
            this.error.repwd = '两次密码不一致';
            this.isError = true;
        }
    }

    OK() {
        this.check();
        if (!this.isError) {
            const registerReq = this.userMgrService.register(this.user);
            registerReq.then((data) => {
                angular.extend(this.error, data.data);
                this.message = '注册成功';
                this.isBoxShow = true;
            });
        }
    }
}

export default userMgr;