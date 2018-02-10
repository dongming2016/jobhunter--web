class headerService {
    /**@ngInject */
    constructor() {
        this.isShow = false;
    }
    
    switchDialog(isShow) {
        this.isShow = isShow;
    }

    getDialogStatus() {
        return this.isShow;
    }
}

export default headerService;