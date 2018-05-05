import jquery from 'jquery';

class UploadCtrl {
    constructor($document, uploadService, $scope) {
        this.acceptList = '';
        this.$document = $document;
        this.$scope = $scope;
        this.isFileUpload = true;
        this.uploadService = uploadService;
        this.tips = '选择图片';
        this.isBoxShow = false;
    }

    select() {
        jquery('#upload').click();
    }

    hello() {
        document.getElementById('preImg').src = this.$scope.file;
    }
    upload() {
        const file = document.querySelector('input[type=file]').files[0];
        this.isFileUpload = false;
        const result = this.uploadService.upload('/myapp/backend/upload/pic', file);
        result.then(() => {
            this.isFileUpload = true;
            this.isBoxShow = true;
            setTimeout(() =>{
                this.$scope.$apply();
            }, 400            
            );
            
        });
    }
}

export default UploadCtrl;
