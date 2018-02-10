class header {
    /**ngInject */
    constructor(menuConfig, headerService) {
        this.menu = menuConfig;
        // 默认第一个tab页。
        this.activeIndex = 0;
        this.navActiveIndex = 0;
        this.headerService = headerService;
    }
}

export default header;