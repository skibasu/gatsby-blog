import React from 'react'
import Layout from "../components/layout"
import PostNav from '../components/PostNav/PostNav'
import PostInfo from '../components/PostInfo/PostInfo'
import BreadCrumps from '../components/BreadCrumps/BreadCrumps'

const Post = ({pageContext}) => {
   console.log(pageContext.next.next)
   const next = pageContext.next;
   return (<>

      <Layout>
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