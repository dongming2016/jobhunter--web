class MenuCtrl {
    constructor() {
        this.submenus = [];
    }

    /**
     * 
     * @param {*子菜单} submenu 
     */
    select(index) {
        this.unselectAll();
        this.submenus[index].isSelected = true;
    }

    unselectAll() {
        angular.forEach(this.submenus, (item) => {
            item.isSelected = false;
        });
    }
    /**
     * 注册子菜单
     * @param {子菜单} submenu 
     */
    addSubmenu(submenu) {
        this.submenus.push(submenu);
    }
}

export default MenuCtrl;