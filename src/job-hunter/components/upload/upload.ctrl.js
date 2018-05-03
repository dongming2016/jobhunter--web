import angular from 'angular';
import jquery from 'jquery';

class UploadCtrl {
    constructor($document, uploadService) {
        this.acceptList = '';
        this.$document = $document;
        this.file = null;
        this.uploadService = uploadService;
    }

    select() {
        jquery('#upload').click();
    }

    upload() {
        var file = document.querySelector('input[type=file]').files[0];
        var data = new FormData();
        data.append('photos', file);
        this.uploadService.upload('/myapp/backend/upload', data);
    }
}

export default UploadCtrl;
