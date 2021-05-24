import React from 'react';
import FooterMenu from './FooterMenu';
import IconLogoFooter from '../../images/svg/logo-footer.svg'
import Background from '../../images/svg/background-9.svg'

const BlogFooter = () => {

   return (
      <footer className="page-footer page-footer-blog position-relative" id="footer-blog">
         <div className="page-footer-blog__background position-absolute d-none d-lg-block">
            <Background />
         </div>
         <div className="page-footer-blog__container container">
            <div className="page-footer__bottom page-footer-blog__bottom d-none d-lg-block">
               <div className="row">
                  <div className="col col-12 col-lg-6 page-footer__bottom-col-1">
                     <p className="page-footer__menu-description">There should be an easier way to get the right gift to the right person at the right time</p>
                  </div>
                  <div className="col col-12 col-lg-6">
                     {<FooterMenu />}
                     <div className="page-footer__copyrights-wrapper">
                        <p className="copyrights">
                           Copyright 2021, Bo LTD. All Rights Reserved. </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="page-footer-blog__mobile d-flex d-lg-none justify-content-center align-items-center">
               <figure className="page-footer-blog__logo">
                  <IconLogoFooter />
               </figure>
               <p className="page-footer-blog__logo-text">Your gift giving on auto-pilot</p>
            </div>
         </div>
      </footer >
   )
}
export default BlogFooter;