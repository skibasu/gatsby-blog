import React from 'react';
import Picture from '../../images/svg/hero-blog.svg'

const BlockHeroBlog = () => {
   return (
      <section className="block-hero-blog">
         <div className="container block-hero-blog__container">
            <div className="row block-hero-blog__row">
               <div className="col-12 col-lg-6 block-hero-blog__col-1 pb-5 pb-lg-0">
                  <div className="block-hero-blog__col-inner text-center text-lg-left">
                     <p className="block-hero-blog__decorative decorative">Blog</p>
                     <h2 className="block-hero-blog__col-title"><span className="orange">Thoughtful gifts </span>for<br /> your favorite people</h2>
                     <p className="block-hero-blog__col-description">Keep track of all your loved one’s special days and send them the perfect present at the perfect time.</p>
                  </div>
               </div>
               <div className="col-12 col-lg-6  block-hero-blog__col-2 pr-0 d-none d-lg-flex justify-content-end">
                  <div className="block-hero-blog__col-inner ">
                     <figure className="block-hero-blog__figure d-flex justify-content-center"><Picture /></figure>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlockHeroBlog;