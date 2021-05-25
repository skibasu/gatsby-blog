// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-template-blog-js": () => import("./../../../src/template/blog.js" /* webpackChunkName: "component---src-template-blog-js" */),
  "component---src-template-post-js": () => import("./../../../src/template/post.js" /* webpackChunkName: "component---src-template-post-js" */)
}

