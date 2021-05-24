import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import * as underscore from 'underscore';
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockHeroBlog from '../components/BlockHeroBlog/BlockHeroBlog';
import PostLoop from '../components/Blog/PostLoop';
import LoadMorePosts from '../components/LoadMorePosts/LoadMorePosts'
import Filters from '../components/Filters/Filters';
import Provider from '../apollo/Apollo';
import Test from '../components/Test/test'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';


const Blog = (data) => {
   const client = new ApolloClient({
      fetch,
      // Change this to your GraphQL endpoint.
      uri: 'https://n4g.891.myftpupload.com/graphql',
   });



   // Wrap the element.
   return <ApolloProvider client={client}><Test/></ApolloProvider>;

}

export default Blog;