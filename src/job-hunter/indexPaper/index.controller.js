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