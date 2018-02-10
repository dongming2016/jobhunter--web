export default function menuConf() {
    const menu = {
        header: {right:[
            {
                name: 'cm',
                url: '',
            }
        ],
        left:[
            {
                name: 'xx',
                url: '',
                itemClass: '',
                iconClass: 'jh-phone-logo',
            },
            {
                name: 'lm',
                url: '',
            }
        ],
        },
        logo: 'jh-logo',
        middleItem: [
            {
                id: 'index',
                href: 'app.index',
                name: '首页',
            }
        ],
    };

    return menu;
}
