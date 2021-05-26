module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Bo blog","short_name":"Bo","start_url":"/blog","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/bitmaps/favicon-96x96.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b9ec67e227020c25032312033a2709b1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://n4g.891.myftpupload.com/graphql","schema":{"typePrefix":"Wp","queryDepth":15,"circularQueryLimit":5,"timeout":30000,"perPage":100,"requestConcurrency":15,"previewRequestConcurrency":5},"develop":{"hardCacheMediaFiles":true,"nodeUpdateInterval":5000,"hardCacheData":false},"type":{"Post":{"limit":1000},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"},"verbose":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
