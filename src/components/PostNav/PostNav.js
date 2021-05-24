import React from "react"
import ArrowRight from '../../images/svg/arrow-right.svg';
import { Link } from 'gatsby';


const PostNav = ({data}) => {
console.log(data.next)
   return (
<>
       {  data.next && data.next &&
      <div className="next-article position-relative d-flex flex-column align-items-end">
         <div className="next-artilce__body">
            <p className="next-article__header">Next article </p>
            <h2 className="next-article__title">{data.next.title}</h2>
        </div>
         
         <Link to={data.next.uri} className="next-article__arrow arrow arrow-right position-absolute">
            <ArrowRight />
         </Link>
      </div>
}
      </>
   )

}
export default PostNav;