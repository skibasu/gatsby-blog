import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';

const rMenu = (data) => {
  
const array = data.allWpMenu.nodes[0].menuItems.nodes;
   return (
      <nav className="page-nav d-none flex-grow-1 d-lg-flex" id="navigation">
         <ul className="list-navigation row justify-content-around justify-xl-content-start">
            <li className="list-navigation__col list-navigation__firs-col">
               <Link className="list-navigation__link d-block scroll-link" to={array[0].url} data-index="7">{array[0].label}</Link>
            </li>
            <li className="list-navigation__col list-navigation__firs-col">
               {array.slice(1, array.length - 1).map((v) =>
                  <Link key={v.id} className="list-navigation__link d-block scroll-link" to={v.url} data-index="3">{v.label}</Link>
               )}
            </li>
            <li className="list-navigation__col list-navigation__last-col">
               <Link className="list-navigation__link d-block" to={array[array.length - 1].url} dangerouslySetInnerHTML={{ __html: array[array.length - 1].label }}></Link>
            </li>
         </ul>
      </nav>
   )
}
const Menu = () =>
   <StaticQuery query={graphql`
   query {
      allWpMenu(filter: {slug: {eq: "blog-menu"}}) {
         nodes {
            name
            menuItems {
            nodes {
               label
               url
               id
            }
            }
         }
      }
   }
`} render={(data) => rMenu(data)} />

export default Menu;




