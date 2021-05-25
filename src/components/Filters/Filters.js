import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Button from './Button';
import ButtonReset from './ButtonReset';


const rFilters = (data, filters, onReset, onClick ) => {

   return (
      <section className="post-filters mb-5">
         <div className="container post-filters__container">
            <div className="row justify-content-center m-0">
               {filters && <ButtonReset onClick={onReset} filters={filters} />}
               {data.allWpCategory.nodes.map(v => +v.count !== 0 && <Button key={v.slug} slug={v.slug} name={v.name} onClick={onClick} filters={filters} />)}
            </div>
         </div >
      </section>
   )
}
const Filters = ({ filters, onReset, onClick }) => <StaticQuery query={ graphql`
  query {
     allWpCategory {
    nodes {
      name
      count
      slug
    }
  }
}
`} render={data => rFilters(data, filters, onReset, onClick)}/>

export default Filters;
