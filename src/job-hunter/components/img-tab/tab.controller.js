class Tab {
    constructor() {
        this.tabs = [];
    }

    register(tab) {
        if (this.tabs.length === 0) {
            tab.show = true;
        }
        this.tabs.push(tab);
        console.log(tab);
    }

    select(tab) {
        angular.forEach(this.tabs, (item) => {
            item.show = false;
        });
        tab.show = true;
    }
}

export default Tab;