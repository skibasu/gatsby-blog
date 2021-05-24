import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const rFooterMenu = (data) => {
   const array = data.allWpMenu.nodes[0].menuItems.nodes;
   console.log(array);
   return (
      <ul className="row page-footer__nav" id="navigation-footer">
         {array.map(v => { return (<li key={v.id} className="col col-6 col-md-4 page-footer__nav-elem"> <Link className="scroll-link" to={v.url} dangerouslySetInnerHTML={{ __html: v.label }} /></li>) })}
      </ul>
   )

}


const FooterMenu = () =>
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
`} render={(data) => rFooterMenu(data)} />

export default FooterMenu;
