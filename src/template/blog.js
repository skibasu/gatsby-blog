import React,{useState,useEffect} from "react"
import * as underscore from 'underscore';
import Layout from "../components/layout"
import SEO from "../components/seo"
import  BlockHeroBlog from '../components/BlockHeroBlog/BlockHeroBlog';
import PostLoop from '../components/Blog/PostLoop';
import LoadMorePosts from '../components/LoadMorePosts/LoadMorePosts'
import Filters from '../components/Filters/Filters';


const Blog = ({pageContext}) => {
   const image = pageContext.acf[0] && pageContext.acf[0].featuredImage && pageContext.acf[0].featuredImage.node && pageContext.acf[0].featuredImage.node.sourceUrl;
   const title = pageContext.acf[0] && pageContext.acf[0].seo && pageContext.acf[0].seo.title;
   const description = pageContext.acf[0] && pageContext.acf[0].seo && pageContext.acf[0].seo.metaDesc;
   const data = Object.values(pageContext.allPosts);
   const more = 3;
   const pP = 9;

   const [posts, setPost] = useState(data);
   const [postsPerPage, setPostPerPage] = useState(pP);
   const [isMore, setMore] = useState(data.length > postsPerPage ? true : false);
   const [filters, setFilters] = useState([]);

   const onloadMorePosts = () => {
      setPostPerPage(current => current + more);
   }
   const resetFilters = () => {
      setPostPerPage(pP);
      setFilters([]);
   }

   const checkFilters = () => {
      const array = data.filter(v => filters.length > 0 ? (underscore.intersection(v.categories.nodes.map(v => v.name), filters).length > 0 ? true : false) : true);
      return array;
   }

   const onFilters = (name, remove = false) => {
      setPostPerPage(pP);
      if (remove) {
         setFilters([]);

      } else {
         setFilters([name]);

      }
      return false;
   }

   useEffect(() => {
      if (postsPerPage >= posts.length) {
         setMore(false);
      } else {
         setMore(true);
      }
   }, [postsPerPage, posts])

   useEffect(() => {
      setPost([...checkFilters()]);
   }, [filters])


   return (
      <Layout>
         <SEO title={title} image={image} description={description}/>
         <BlockHeroBlog data={pageContext.acf}/>
         <Filters onClick={onFilters} onReset={resetFilters} filters={filters} />
         <PostLoop posts={posts ? posts : []} postsPerPage={postsPerPage} categories={filters} /> 
         <LoadMorePosts onClick={onloadMorePosts} disabled={!isMore} />
         </Layout>
   )
}

export default Blog;