module.exports = {
    title: 'Scotch VuePress',
    description: "A demo documentation using VuePress",
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app'
              ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    }
}