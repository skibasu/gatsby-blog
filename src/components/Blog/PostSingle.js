import React,{useState, useEffect} from 'react';
import { Link } from 'gatsby';
import dateformat from 'dateformat';
import * as underscore from 'underscore';

const PostSingle = ({ data, categories }) => {
   const [isLoaded, setImageLoaded] = useState(false);


   return (
      <div className={`col col-12 col-md-4 posts-loop__col`}>
         <article className={`post-single d-flex align-items-center d-md-block`}>
            <p className="post-single__category d-none d-md-block category">{categories.length ? underscore.intersection(categories, data.categories.nodes.map(v => v.name))[0] : data.categories.nodes[0].name}</p>
            <figure className="post-single__picture grow-0 position-relative">
               <Link className="d-block" to={data.uri}>
                  {data.featuredImage &&   <img className="position-absolute" src={ data.featuredImage.node.sourceUrl} srcSet={data.featuredImage.node.srcSet} alt={ data.featuredImage.node.title} /> }
               </Link>
            </figure>
            <div className="post-single__body grow-1 d-flex flex-column justify-content-center justify-content-md-start">
               <p className="post-single__category category d-md-none order-1">{data.categories.nodes[0].name}</p>
               <div className="post-single__user-wrapper row order-3 order-md-1 align-items-center">
                  <div className="col d-none d-md-block flex-grow-0">
                     <figure className="post-single__avatar avatar"><img src={data.author.node.avatar.url} alt="avatar" /></figure>
                  </div>
                  <div className="col d-flex d-md-block justify-content-between flex-grow-1">
                     <p className="post-single__author">{data.author.node.name}</p>
                     <p className="post-single__date">{dateformat(data.date, 'mediumDate')}</p>
                  </div>
               </div>

               <h3 className="post-single__title order-2">
                  <Link className="d-block" to={data.uri}>{data.title}</Link>
               </h3>

               <div className="post-single__description d-none d-md-block order-3" dangerouslySetInnerHTML={{ __html: data.excerpt }} />
            </div>
         </article>
      </div>
   )
}

export default PostSingle;