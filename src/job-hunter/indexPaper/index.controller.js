class indexCtrl {
    /**@ngInject */
    constructor(menuConfig, $scope, $q) {
        menuConfig.options = [{ name: '全国站' }, { name: '[切换城市]', showBox: this.clickCallback.bind(this)}, ];
        this.cities = [{ name: '北京' }, { name: '上海' }, { name: '天津' }, { name: '武汉' }, { name: '广州' }, { name: '深圳' }];
        this.alertTitle = '切换城市';
        // 默认全国站
        this.chosedCity = '全国站';
        this.isBoxShow = false;
        this.$q = $q;
        this.menusConf = [{
            mainTopic: '1',
            subTopic: [{
                name: 'abc',
                submenuConf: [{ title: 'hello',
                    datas: [{ name: 'lsses' }, { name: 'aewrf' }],
                }],
            }]
        }, {
            mainTopic: '2',
            subTopic: [{
                name: 'def',
                submenuConf: [{
                    title: 'hell111o',
                    datas: [{ name: 'advs111' }, { name: 'advs111' }],
                }],
            }]
        }];

        this.imgs = ['a', 'b'];
        this.labelInfo = {
            position : '总裁助理',
            issueTime : '2018-01-31',
            companyId : 'abe',
            nickname : 'abf',
            hrPosition : 'abs',
            advertise : 'ab',
            QRCode : 'ab',
            salary : '10k-15k',
            requirement : '经验不限/本科',
            labels : [
                {
                    name: '金融',
                },
                {
                    name: '政府关系',
                },
                {
                    name: '总助',
                }
            ],
            companyName: '福米科技',
            companyUrl: '',
            description: '金融,移动互联网/A轮/长沙',
        };
    }

    clickCallback() {
        this.isBoxShow = true;
    }

    cityCallback(id) {
        console.log(id);
    }

    getSearch(text) {
        const deferred = this.$q.defer();
        deferred.resolve([{id:1, name:'hello'}, {id: 2, name: 'helloo'}]);
        return deferred.promise;
    }

    getDetail(id) {
        console.log(id);
    }
}

export default indexCtrl;