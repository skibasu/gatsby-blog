import React from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

 const Test = (props)=> {
    console.log(props);
    const commentQuery = gql`
    query {
      allWpPost {
    nodes {
      id
      title
      uri
      excerpt
      content
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      date
      featuredImage {
        node {
          srcSet
          title
          sourceUrl
        }
      }
    }
    edges {
      next {
        uri
        title
      }
    }
  }
    }
`;
return (
   <Query query={commentQuery} >
      {({ loading, error, data }) =><h1>Query data{console.log(data)}</h1>}
      </Query>
)
}
export default Test