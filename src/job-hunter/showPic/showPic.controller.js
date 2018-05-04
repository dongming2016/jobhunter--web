class showPic {
    constructor(pictureService) {
        this.pictureService = pictureService;
        this.items = [];
    }

    $onInit() {
        const pictureReq = this.pictureService.getAllPicture();
        pictureReq.then((data) => {
            this.items = data.data;
        });
    }
}

export default showPic;