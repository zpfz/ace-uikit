module.exports = {
  theme:"antdocs",
  title: "ACE UIKit",
  description: "A lightweight UI framework for Adobe CEP.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }],

    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: 'ace,cep,adobe,ps,ae,ace-ui,ace-uikit,adobe cep' }],
    ["link",{ rel: "stylesheet",href: "https://unpkg.com/ace-uikit/dist/ace.min.css" }],
    ['script', { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/gh/zpfz/ace-uikit@master/test/js/jquery.min.js' }],
    ['script', { type: 'text/javascript', src: 'https://unpkg.com/ace-uikit/dist/ace.min.js' }]
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
    backToTop: true,
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