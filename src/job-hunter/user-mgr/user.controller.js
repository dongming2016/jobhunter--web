class userMgr {
    constructor(userMgrService) {
        this.user = {};
        this.userMgrService = userMgrService;
    }

    OK() {
        this.userMgrService.register(this.user);
    }
}

export default userMgr;