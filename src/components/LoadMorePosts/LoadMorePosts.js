import React from "react"

const LoadMorePosts = ({ onClick, disabled }) => {


   return (<>
      <div className="container container--smaller">
         <div className="row justify-content-md-end posts-loop__row-bottom m-0">
            <div className="posts-loop__more-wrapper"> <button disabled={disabled} className="read-more" onClick={onClick}>Load more</button></div>
         </div>
      </div>
   </>)

}

export default LoadMorePosts;