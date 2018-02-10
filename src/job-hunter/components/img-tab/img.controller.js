class ImgTab {
    constructor() {
    }

    $onInit() {
        console.log('hello');
        this.tabCtrl.register(this);
    }
}

export default ImgTab;