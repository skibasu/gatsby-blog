const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   // query content for WordPress posts
   const {
      data: {
         allWpPost: { nodes: allPosts, edges:next },
      },
   } = await graphql(`
    query {
      allWpPost {
    nodes {
      id
      title
      uri
      excerpt
      content
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      date
      featuredImage {
        node {
          srcSet
          title
          sourceUrl
        }
      }
    }
    edges {
      next {
        uri
        title
      }
    }
  }
    }
  `)
   const postTemplate = path.resolve(`./src/template/post.js`)
   allPosts.forEach((post,i) => {
      createPage({
         // will be the url for the page
         path: post.uri,
         // specify the component template of your choice
         component: slash(postTemplate),
         // In the ^template's GraphQL query, 'id' will be available
         // as a GraphQL variable to query for this post's data.
         context: {
         ...post,next:{...next[i]}
         },
      })
   })

   const blogTemplate = path.resolve(`./src/template/blog.js`)
   createPage({
      // will be the url for the page
      path: `/`,
      // specify the component template of your choice
      component: slash(blogTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: allPosts,
   })
   
}