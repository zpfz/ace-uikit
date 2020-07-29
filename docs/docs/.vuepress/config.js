module.exports = {
  theme:"antdocs",
  title: "ACE UIKit",
  description: "A lightweight UI framework for Adobe CEP.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }],

    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: 'ace,cep,adobe,ps,ae,ace-ui,ace-uikit,adobe cep' }]
  ],
  markdown: {
    lineNumbers: false,
  },
  plugins: {
    'sitemap': {
      hostname: 'https://ace-ui.now.sh'
    },
  },
  themeConfig: {
    smoothScroll: true,
    sidebarDepth: 0,
    logo: '/assets/logo.png',
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/ace-uikit",
    editLinks: false,
  },
};