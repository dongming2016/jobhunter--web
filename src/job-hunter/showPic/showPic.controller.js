class showPic {
    constructor(pictureService) {
        this.pictureService = pictureService;
        this.items = [];
    }

    $onInit() {
        const pictureReq = this.pictureService.getAllPicture();
        try {
            pictureReq.then((data) => {
                this.items = data.data;
            });
        }
        catch(e) {
            console.log(e);
        }
        
    }
}

export default showPic;