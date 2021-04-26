const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/user/)) {
    createPage({
      path: `/user`,
      matchPath: `/user/*`,
      component: path.resolve('src/pages/index.js'),
    })
  }
}
