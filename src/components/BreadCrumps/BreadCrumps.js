import React from 'react'
import { Link } from 'gatsby';

const BreadCrumps = ({ slugs, titles }) => {
   return (
      <div className="bread-crumps d-none d-lg-block">
         <div className="container container--smaller">
            {slugs.map((v, i) => i === slugs.length - 1 ? <p key={v + i} className="bread-crumps__link">{titles[i]}</p> : <Link key={v} className="bread-crumps__link" to={`${v}`}>{titles[i]}</Link>)}
         </div>
      </div>
   )

}



export default BreadCrumps