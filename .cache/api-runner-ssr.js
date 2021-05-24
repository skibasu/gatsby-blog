var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/fireart/Desktop/gatsby-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/fireart/Desktop/gatsby-blog/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/fireart/Desktop/gatsby-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/blog","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/bitmaps/favicon-96x96.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b9ec67e227020c25032312033a2709b1"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
