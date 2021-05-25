
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/fireart/Desktop/gatsby-blog/src/pages/404.js")),
  "component---src-template-blog-js": preferDefault(require("/Users/fireart/Desktop/gatsby-blog/src/template/blog.js")),
  "component---src-template-post-js": preferDefault(require("/Users/fireart/Desktop/gatsby-blog/src/template/post.js"))
}

