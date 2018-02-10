class alertCtrl {
    /**ngInject */
    constructor(headerService) {
        this.headerService = headerService;
        this.isShow = false;
    }

    showBox() {
        this.isShow = true;
    }

    hideBox() {
        this.isShow = false;
    }
}

export default alertCtrl;