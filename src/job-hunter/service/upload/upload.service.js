import angular from 'angular';

class UploadService {
    constructor($http) {
        this.$http = $http;
    }

    upload(url, file) {
        return this.$http({
            method: 'POST',
            url,
            data: file,
            headers:  {'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryvlb7BC9EAvfLB2q5'},
            transformRequest: angular.identity,
        });
    }
}

export default UploadService;