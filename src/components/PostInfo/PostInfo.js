import React from "react"
import dateformat from 'dateformat';

const PostInfo = ({ data }) => {
   return (

      <div className="container container--smaller">
         <div className="post-blog-single__header text-center">
            <p className="category post-blog-single__category">{data.categories.nodes[0].name}</p>
            <h1 className="post-blog-single__title post-blog-title">{data.title}</h1>
            <figure className="post-blog-single__avatar avatar"><img src={data.author.node.avatar.url} alt="avatar" /></figure>
            <p className="post-blog-single__author">
               {data.author.node.name}
            </p>
            <p className="post-blog-single__date">{dateformat(data.date, 'mediumDate')}</p>
         </div>
      </div>
   )

}
export default PostInfo;
