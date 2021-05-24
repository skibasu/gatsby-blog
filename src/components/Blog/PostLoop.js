import React from 'react';
import PostSingle from './PostSingle';
const PostLoop = ({ posts, postsPerPage, categories }) => {
   let t = 0.2;
   return (
      <div className="container container--smaller">
         <h2 className="posts-loop__title">Articles</h2>
         <div className="row posts-loop__row">
            
            { posts.slice(0, postsPerPage).map( (v) => { t = t + 0.2; return <PostSingle data={v} key={v.id} categories={categories} t={t}/>} ) }
         </div>
      </div>
   )
}
export default PostLoop;