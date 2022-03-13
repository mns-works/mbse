const path = require('path')
// import { Plugin, LoadContext } from '@docusaurus/types'

module.exports = function pluginBaiduAnalytics(context, options) {
  const isProd = process.env.NODE_ENV === 'production'
  const analyticsId = options.analyticsId

  return {
    name: 'docusaurus-plugin-baidu-analytics',
    // getClientModules() {
    //   return isProd ? [path.resolve(__dirname, '.')] : []
    // },

    injectHtmlTags() {
      if (!isProd) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
                    var _hmt = _hmt || [];
                    (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?${analyticsId}";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                    })();`,
          },
        ],
      }
    },
  }
}
