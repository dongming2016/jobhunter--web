class pictureService {
    constructor($http) {
        this.$http = $http;
    }

    getAllPicture() {
        return this.$http({ url:'/myapp/backend/pics', 
            method: 'GET',
        });
    }
}

export default pictureService;