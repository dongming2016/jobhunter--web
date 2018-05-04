class Nav {
    constructor(newMenuConfig) {
        this.items = newMenuConfig.items;
        if (this.items.length > 0) {
            this.items[0].isActive = true;
        }
    }

    switch(item) {
        console.log('hello');
        this.items.forEach(element => {
            element.isActive = false;
            console.log(element);
        });
        console.log(this.items);
        console.log(item);
        item.isActive = true;
    }
}

export default Nav;
