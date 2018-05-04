class UploadService {
    constructor($http) {
        this.$http = $http;
    }

    upload(url, file) {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('photos', file);
        xhr.open('POST', url, true);

        const promise = new Promise((resolve, reject) => {
            //上传完成
            xhr.onload = () => {
                if (xhr.status == 200) {
                    console.log('hello');
                    resolve('success');
                }
            };

            xhr.onerror = (data) => {
                reject(data);
            };
        });
        
        xhr.onabort = () => {

        };

        // 计算进度，并增加回调函数。
        xhr.onprogress = () => {

        };

        xhr.send(formData);
        return promise;
    }
}

export default UploadService;