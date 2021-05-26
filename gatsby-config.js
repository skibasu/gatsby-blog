module.exports = {
   pathPrefix: `/blog`,
  siteMetadata: {
    title: `Bo Blog`,
    description: `Blog`,
    author: `fireart`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
   `gatsby-plugin-image`,
     `gatsby-plugin-gatsby-cloud`,
   `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
     `gatsby-plugin-sass`,

     {
        resolve: 'gatsby-plugin-react-svg',
        options: {
           rule: {
              include: /\.svg$/,
           },
        },

     },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bo blog`,
        short_name: `Bo`,
        start_url: `/blog`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
         icon: `src/images/bitmaps/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
     {
        resolve: `gatsby-source-wordpress`,
        options: {
           url:
              // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
              process.env.WPGRAPHQL_URL ||
              `https://n4g.891.myftpupload.com/graphql`,
           schema: {
              //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
              typePrefix: `Wp`,
           },
           develop: {
              //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
              hardCacheMediaFiles: true,
           },
           type: {
              Post: {
                 limit:1000
              },

           },
        }
      },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}
