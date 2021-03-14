module.exports = {
    title: '孙雪峰的博客',
    description: '交流请留言, 24小时回复',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: '介绍', link: '/intro/介绍' },
            { text: '更新计划', link: '/update/list' },
        ]
    },
}
