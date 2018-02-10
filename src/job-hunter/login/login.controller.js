class loginCtrl {
    /**ngInject */
    constructor(userMgrService, $state, $translate) {
        this.showItem = 1;
        this.errorInfo = {
            isNameError: false,
            isPwdError: false,
        };
        this.userMgrService = userMgrService;
        this.$state = $state;
        console.log($translate);
        console.log($translate.instant("LOGIN.LOGIN"));
    }

    submit() {
        const isInputEmpty = (input) => {
            return input === undefined || input === '';
        };
        
        const checkInput = () => {
            let isOk = true;
            if (isInputEmpty(this.nickname)) {
                this.errorInfo.isNameError = true;
                this.errorInfo.nameError = '请输入已验证手机/邮箱';
                isOk = false;
            }
            if (isInputEmpty(this.password)) {
                this.errorInfo.isPwdError = true;
                this.errorInfo.pwdError = '请输入密码';
                isOk = false;
            }
            return isOk;
        };

        if (!checkInput()) {
            return;
        }

        this.userMgrService.checkUser({ name: this.nickname, password: this.password })
            .then((response) => {
                const status = response.data.status;
                const errorCode = response.data.errorCode;
                
                if (status === -1) {
                    this.errorInfo.isNameError = true;
                    this.errorInfo.nameError = errorCode;
                } else if (status === -2) {
                    this.errorInfo.isPwdError = true;
                    this.errorInfo.pwdError = errorCode;
                } else {
                    this.$state.go('app.index');
                }
            })
            .reject((response) => {
                console.log(response);
            });
        
    }
}

export default loginCtrl;
