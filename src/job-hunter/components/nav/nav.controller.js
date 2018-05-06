class Nav {
    constructor(newMenuConfig) {
        this.items = newMenuConfig.items;
        this.activeIndex = 0;
    }

    hello(item) {
        console.log(item);
    }
}

export default Nav;
