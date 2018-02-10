class SubmenuCtrl {
    /**@ngInject */
    constructor() {

    }

    $onInit() {
        this.menuCtrl.addSubmenu(this);
    }
}

export default SubmenuCtrl;