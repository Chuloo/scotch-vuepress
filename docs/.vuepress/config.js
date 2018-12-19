module.exports = {
    title: 'Numigi Test Docs',
    description: "La documentation Test de Numigi avec VuePress",
    themeConfig:{
        nav: [
            { text: 'PRESENTATION', link: '/presentation/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [
          {
            title: 'Presentation',
            collapsable: false,
            children: [
              '/presentation/presentation'
            ]
          },
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app' ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api' ]
            }
          ]
    }
}
