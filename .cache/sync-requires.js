
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/pages/work.js")),
  "component---src-templates-blogs-categories-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/templates/blogs/categories.js")),
  "component---src-templates-blogs-post-js": preferDefault(require("/Users/owencraston/src/personal/lucascraston.github.io/src/templates/blogs/post.js"))
}

