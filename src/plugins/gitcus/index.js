const path = require('path')
// import { Plugin, LoadContext } from '@docusaurus/types'

module.exports = function pluginGitcus(context, options) {
  const isProd = process.env.NODE_ENV === 'production'
  const { repo, repoId, cateogry, cateogryId } = options

  return {
    name: 'docusaurus-plugin-gitcus',
    // getClientModules() {
    //   return isProd ? [path.resolve(__dirname, '.')] : []
    // },

    injectHtmlTags() {
      if (!isProd) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://giscus.app/client.js',
              'data-repo': repo,
              'data-repo-id': repoId,
              'data-category-id': cateogryId,
              'data-mapping': 'pathname',
              'data-strict': '0',
              'data-reactions-enabled': '1',
              'data-emit-metadata': '0',
              'data-input-position': 'bottom',
              'data-theme': 'preferred_color_scheme',
              'data-lang': 'zh-CN',
              crossorigin: 'anonymous',
              async: true,
            },
          },
        ],
      }
    },
  }
}
