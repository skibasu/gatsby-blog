import React from 'react'
import Layout from "../components/layout"
import PostNav from '../components/PostNav/PostNav'
import PostInfo from '../components/PostInfo/PostInfo'
import BreadCrumps from '../components/BreadCrumps/BreadCrumps'
import SEO from "../components/seo"

const Post = ({pageContext}) => {
   const next = pageContext.next;
   const image = pageContext.featuredImage && pageContext.featuredImage.node && pageContext.featuredImage.node.sourceUrl;

   return (<>

      <Layout>
 
         <SEO title={pageContext.seo && pageContext.seo.title} image={image} description={pageContext.seo && pageContext.seo.metaDesc}/>
         <BreadCrumps slugs={['http://localhost:3000/', '/', '/']} titles={['Home', 'Blog', pageContext.title]} />
         <article className="post-blog-single">
            <PostInfo data={pageContext} />
            <div className="container container--smaller">
               <div className="post-blog-single__body wp-content" dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
               {pageContext.next && <PostNav data={next} />}
            </div>
           
         </article>
      </Layout>
   </>)
}

export default Post;