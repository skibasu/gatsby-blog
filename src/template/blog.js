import React,{useState,useEffect} from "react"
import { graphql } from "gatsby"
import * as underscore from 'underscore';
import Layout from "../components/layout"
import SEO from "../components/seo"
import  BlockHeroBlog from '../components/BlockHeroBlog/BlockHeroBlog';
import PostLoop from '../components/Blog/PostLoop';
import LoadMorePosts from '../components/LoadMorePosts/LoadMorePosts'
import Filters from '../components/Filters/Filters';


const Blog = ({pageContext}) => {
   const data = Object.values(pageContext);
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

   // console.log('filters --- ',filters, 'posts ---- ' ,posts)

   return (
      <Layout>
         <SEO title="home" />
         <BlockHeroBlog/>
         <Filters onClick={onFilters} onReset={resetFilters} filters={filters} />
         <PostLoop posts={posts ? posts : []} postsPerPage={postsPerPage} categories={filters} /> 
         <LoadMorePosts onClick={onloadMorePosts} disabled={!isMore} />
         </Layout>
   )
}

export default Blog;